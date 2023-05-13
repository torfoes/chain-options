import React, { useState, useCallback } from "react";
import BlockListener from "./BlockListener";
import BlockBeggar from "./BlockBeggar";
import BlockCard from "./BlockCard";
import Layout from "./Layout";
import { Divider } from "@mui/joy";
import { Block } from "ethers";
import {Box} from "@mui/joy";
import { ChainName } from "../utils/chainConfig"; // import ChainName from the config file

interface BlockChainProps {
    chainName: ChainName; // Use ChainName enum here
    useWebSocketProvider: boolean;
}

const BlockChain: React.FC<BlockChainProps> = ({ chainName, useWebSocketProvider }) => {
    const [blockList, setBlockList] = useState<Block[]>([]);

    const handleNewBlock = useCallback((block: Block) => {
        setBlockList((prevList) => {
            // Check if the block is already in the list
            if (!prevList.find((b) => b.number === block.number)) {
                // If the block is not in the list, add it
                return [...prevList, block];
            }
            // If the block is already in the list, return the list unchanged
            return prevList;
        });
    }, []); // Empty array ensures that function reference is stable across renders

    return (
        <>
            {useWebSocketProvider ? (
                <BlockListener onBlockMined={handleNewBlock} chainName={chainName} />
            ) : (
                <BlockBeggar onBlockMined={handleNewBlock} chainName={chainName} />
            )}

            <Layout.BlockLayout>
                {blockList.map((block, index) => (
                    <Box key={block.number}>
                        <BlockCard block={block} chainName={chainName}/>
                    </Box>
                ))}
            </Layout.BlockLayout>
        </>
    );
};

export default BlockChain;
