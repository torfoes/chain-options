import React, { useState, useEffect } from "react";
import { EtherscanProvider } from "ethers";
import { Typography } from "@mui/joy";
const ETHERSCAN_API_KEY = process.env.REACT_APP_ETHERSCAN_API_KEY;

const EthersPrice: React.FC = () => {
    const [price, setPrice] = useState<number | null>(null);

    useEffect(() => {
        const fetchPrice = async () => {
            // Instantiate a new Etherscan provider
            const etherscanProvider = new EtherscanProvider(
                "homestead", // You can change the network here
                ETHERSCAN_API_KEY
            );

            // Fetch the price
            const price = await etherscanProvider.getEtherPrice();

            // Update the state
            setPrice(price);
        };

        // Fetch the price on component mount
        fetchPrice();
    }, []);

    return <Typography variant={'soft'} color={'success'}>ETH Price: {price ? `$${price}` : "Loading..."}</Typography>;
};

export default EthersPrice;
