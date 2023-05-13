import React, { useEffect, useState } from "react";
import { Block, InfuraWebSocketProvider } from "ethers";

interface ListenerProps {
    onBlockMined: (block: Block) => void;
    chainName: string;
}

const BlockListener: React.FC<ListenerProps> = ({ onBlockMined, chainName }) => {
    const [infuraProvider, setInfuraProvider] = useState<InfuraWebSocketProvider | null>(null);

    useEffect(() => {
        const provider = new InfuraWebSocketProvider(chainName, process.env.REACT_APP_INFURA_PUBLIC_API_KEY);
        setInfuraProvider(provider);
    }, [chainName]);

    useEffect(() => {
        const setUpListener = async () => {
            if (!infuraProvider) {
                return;
            }

            const currentBlockNumber = await infuraProvider.getBlockNumber();
            console.log("Current block number:", currentBlockNumber);

            const handleNewBlock = async (blockNumber: number) => {
                if (!infuraProvider) return;

                const blockData = await infuraProvider.getBlock(blockNumber);

                if (blockData && blockData.hash) {
                    onBlockMined(blockData);
                } else {
                    console.log("Block not found:", blockNumber);
                }
            };

            infuraProvider.on("block", handleNewBlock);

            return () => {
                infuraProvider.off("block", handleNewBlock);
            };
        };

        setUpListener();
    }, [infuraProvider, onBlockMined]);

    return null;
};

export default BlockListener;
