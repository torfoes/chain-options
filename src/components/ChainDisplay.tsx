import {Box} from "@mui/joy";
import ChainSelect from "./ChainSelect";
import BlockChain from "./BlockChain";
import {ChainName} from "../utils/chainConfig";
import React, {useState} from "react";

export default function ChainDisplay() {
    const [selectedNetwork, setSelectedNetwork] = useState<ChainName>(ChainName.Mainnet);




    return (
        <Box>
            <ChainSelect/>
            <BlockChain chainName={ChainName.Mainnet} useWebSocketProvider={true}/>
        </Box>
    );
}