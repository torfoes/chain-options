import React, { useState } from 'react';
import { useGlobalState } from '../utils/GlobalState';
import {Select, Option, selectClasses, SvgIcon, Typography} from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";

// Import your SVGs
import { ReactComponent as Ethereum } from '../assets/svg/ethereum.svg';
import { ReactComponent as Polygon } from '../assets/svg/polygon.svg';
import { ReactComponent as Optimism } from '../assets/svg/optimism.svg';
import {Icon} from "@mui/material";

export default function ChainSelect() {
    // Get the setNetwork function from the global state
    const [, , setNetwork] = useGlobalState();



    const handleSelectChange = (event: React.SyntheticEvent | null, newValue: string | null) => {
        // Change the network when the selected option changes
        if (newValue !== null) {
            console.log("New value: " + newValue);
            // setNetwork(newValue);
        }
    };



    // Set default network
    React.useEffect(() => {
        setNetwork("mainnet");
    }, []);

    return (
        <Select
            // uh, this is not working like i want so i just used the
            defaultValue={"ethereum"}

            // onChange={handleSelectChange}
            indicator={<KeyboardArrowDown />}
            sx={{
                width: 160,
                [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                        transform: 'rotate(-180deg)',
                    },
                },
            }}
        >
            <Option value="ethereum">

                <Typography startDecorator={<SvgIcon component={Ethereum} />}>
                    Ethereum
                </Typography>
            </Option>

            <Option value="polygon">
                <Typography startDecorator={<SvgIcon component={Polygon} />}>
                    Polygon
                </Typography>
            </Option>
            <Option value="optimism">
                <Typography startDecorator={<SvgIcon component={Optimism} />}>
                    Optimism
                </Typography>
            </Option>
        </Select>
    );
}
