import React, { useEffect, useState } from "react";
import { Block, InfuraProvider } from "ethers";

interface BlockBeggarProps {
    onBlockMined: (block: Block) => void;
    chainName: string;
}

const BlockBeggar: React.FC<BlockBeggarProps> = ({ onBlockMined, chainName }) => {
    const [infuraProvider, setInfuraProvider] = useState<InfuraProvider | null>(null);
    const [lastBlockNumber, setLastBlockNumber] = useState<number | null>(null);

    useEffect(() => {
        const provider = new InfuraProvider(chainName, process.env.REACT_APP_INFURA_PUBLIC_API_KEY);
        setInfuraProvider(provider);
    }, [chainName]);

    useEffect(() => {
        const fetchLatestBlock = async () => {
            if (!infuraProvider) {
                return;
            }

            const latestBlockNumber = await infuraProvider.getBlockNumber();

            if (latestBlockNumber !== lastBlockNumber) {
                const latestBlock = await infuraProvider.getBlock(latestBlockNumber);
                if (latestBlock) {
                    onBlockMined(latestBlock);
                    setLastBlockNumber(latestBlockNumber);
                }
            }
        };

        const intervalId = setInterval(fetchLatestBlock, 250);

        return () => clearInterval(intervalId);
    }, [infuraProvider, onBlockMined, lastBlockNumber]);

    return null;
};

export default BlockBeggar;
