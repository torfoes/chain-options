import React, { useEffect, useState } from "react";
import {Typography, Card, Divider, ListItem, List, Link, Box} from "@mui/joy";
import { Block } from "ethers";
import {shortenAddress} from "../utils/ShortenAddress";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";

import {ChainName, chainBaseUrls, chainColors} from "../utils/chainConfig";
import MerkleChip from "./MerkleChip";

interface BlockCardProps {
    block: Block;
    chainName: ChainName;
}

const BlockCard: React.FC<BlockCardProps> = ({ block, chainName }) => {
    const [transactions, setTransactions] = useState<readonly string[]>([]);

    useEffect(() => {
        if (block) {
            setTransactions(block.transactions);
        }
    }, [block]);

    if (!block) {
        return <Typography>Loading block information...</Typography>;
    }

    return (
        <Card
            sx={{ width: "250", scrollbarWidth: 'thin', scrollbarColor: `${chainColors[chainName]} transparent` }}
        >

            <Link
                href={`${chainBaseUrls[chainName]}block/${block.number}`}
                color={'neutral'}
                level={'body1'}
                underline={'hover'}
            >
                Block #{block.number}
            </Link>

            <List sx={{ maxHeight: 175,
                overflowY: 'auto',
            }}>

                <Divider />
                {transactions.slice(0, 50).map((hash) => (
                    <ListItemButton key={hash} sx={{ p: 0.5, minHeight: 32 }}>
                        <Link
                            href={`${chainBaseUrls[chainName]}tx/${hash}`}
                            color={'neutral'}
                            level={'body1'}
                            underline={'hover'}
                        >
                            <ListItemContent>{shortenAddress(hash)}</ListItemContent>
                        </Link>
                    </ListItemButton>
                ))}
            </List>

            <Divider />

            <Box sx={{ pt: 2 }}>
                <MerkleChip block={block}/>
            </Box>
            {/*Hash: {shortenAddress(block.hash, 5)}*/}

        </Card>
    );
};

export default BlockCard;
