import React, { useEffect } from "react";
import { useGlobalState } from "../utils/GlobalState";
import { Block } from "ethers";

// Define the prop types for this component
interface ListenerProps {
    onBlockMined: (block: Block) => void;
}

// Define the BlockListener component
const BlockListener: React.FC<ListenerProps> = ({ onBlockMined }) => {
    // Get the Ethereum provider from global state
    const [{ infuraProvider }] = useGlobalState();

    // Define a side effect that will run when the component mounts and when
    // the ethereumProvider or onBlockMined prop changes
    useEffect(() => {
        // Define an async function that will set up the block listener
        const setUpListener = async () => {
            if (!infuraProvider) {
                return; // If the provider isn't available, don't do anything
            }

            // Get the current block number
            const currentBlockNumber = await infuraProvider.getBlockNumber();
            console.log("Current block number:", currentBlockNumber);

            // Define a function that will handle new blocks
            const handleNewBlock = async (blockNumber: number) => {
                if (!infuraProvider) return;

                // Get the block data
                const blockData = await infuraProvider.getBlock(blockNumber);

                if (blockData && blockData.hash) {
                    // If the block exists and has a hash, call the onBlockMined function
                    onBlockMined(blockData);
                } else {
                    console.log("Block not found:", blockNumber);
                }
            };

            // Add the handleNewBlock function as a listener for the 'block' event
            infuraProvider.on("block", handleNewBlock);

            // Return a cleanup function that will remove the listener when the component unmounts
            return () => {
                infuraProvider.off("block", handleNewBlock);
            };
        };

        // Run the setUpListener function
        setUpListener();
    }, [infuraProvider, onBlockMined]); // Dependency array for useEffect

    // This component doesn't render anything, so return null
    return null;
};

export default BlockListener;
