import { Box } from "@mui/joy";
import ChainSelect from "./ChainSelect";
import BlockChain from "./BlockChain";
import { ChainName } from "../utils/chainConfig";
import React, { useState } from "react";

export default function ChainDisplay() {
    const [selectedNetwork, setSelectedNetwork] = useState<ChainName>(ChainName.Mainnet);

    const handleSelectChange = (value: string) => {
        setSelectedNetwork(value as ChainName);
        console.log(value);
    };

    return (
        <Box>
            <ChainSelect onSelectChange={handleSelectChange} />
            <BlockChain key={selectedNetwork} chainName={selectedNetwork}/>
        </Box>
    );
}
