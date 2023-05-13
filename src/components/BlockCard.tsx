import React, { useEffect, useState } from "react";
import { Typography, Card, Divider, Box } from "@mui/joy";
import { Block } from "ethers";

import {shortenAddress} from "../utils/ShortenAddress";

interface BlockCardProps {
    block: Block;
}


const BlockCard: React.FC<BlockCardProps> = ({ block }) => {
    const [transactions, setTransactions] = useState<readonly string[]>([]);
    const [showDetailed, setShowDetailed] = useState<boolean>(false);

    const [cardWidth, setCardWidth] = useState<number>(300); // Add a state for cardWidth

    useEffect(() => {
        if (block) {
            setTransactions(block.transactions);
        }
    }, [block]);

    const handleCardClick = () => {
        setShowDetailed(true); // Increase the cardWidth by 300px
        // console.log(showDetailed, block.number);
    };

    if (!block) {
        return <Typography>Loading block information...</Typography>;
    }

    return (
        <Card
            sx={{ width: `${cardWidth}px` }} // Set the card width to the cardWidth state value
            onClick={handleCardClick} // Add onClick event to handle card click
        >
            <Typography>Block #{block.number}</Typography>
            <Divider />



            <Divider />
            <Typography>Hash: {shortenAddress(block.hash, 5)}</Typography>
        </Card>
    );
};

export default BlockCard;
