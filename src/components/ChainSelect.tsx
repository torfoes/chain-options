import React, { useState } from 'react';
import { useGlobalState } from '../utils/GlobalState';
import {Select, Option, selectClasses, SvgIcon, Typography} from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";

import {chainSVGs} from "../utils/chainConfig";
import {Icon} from "@mui/material";

export default function ChainSelect() {

    const handleSelectChange = (event: React.SyntheticEvent | null, newValue: string | null) => {
        // Change the network when the selected option changes
        if (newValue !== null) {
            console.log("New value: " + newValue);
            // setNetwork(newValue);
        }
    };


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
            <Option value="ethereum" label={<Typography startDecorator={
                chainSVGs.mainnet
                    ? <SvgIcon component={chainSVGs.mainnet} />
                    : null
            }>
                Ethereum
            </Typography>}>
                <Typography startDecorator={chainSVGs.mainnet
                    ? <SvgIcon component={chainSVGs.mainnet} /> : null}>
                    Ethereum
                </Typography>


            </Option>

            <Option value="polygon" label={<Typography startDecorator={
                chainSVGs.matic
                    ? <SvgIcon component={chainSVGs.matic} />
                    : null
            }>
                Polygon
            </Typography>}>

                <Typography startDecorator={chainSVGs.matic
                    ? <SvgIcon component={chainSVGs.matic} /> : null}>
                    Polygon
                </Typography>

            </Option>


            <Option value="optimism" label={<Typography startDecorator={chainSVGs.matic
                ? <SvgIcon component={chainSVGs.matic} /> : null}>
                Optimism
            </Typography>}>


                <Typography startDecorator={chainSVGs.optimism
                    ? <SvgIcon component={chainSVGs.optimism} /> : null}>
                    Optimism
                </Typography>

            </Option>
        </Select>
    );
}
