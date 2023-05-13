import React, { useState } from 'react';
import { useGlobalState } from '../utils/GlobalState';
import {Select, Option, selectClasses, SvgIcon, Typography} from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";

import {chainSVGs} from "../utils/chainConfig";
import {Icon} from "@mui/material";

interface ChainSelectProps {
    onSelectChange: (value: string) => void;
}


export default function ChainSelect({ onSelectChange }: ChainSelectProps) {

    const handleSelectChange = (event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null, newValue: string | null) => {
        // Change the network when the selected option changes
        if (newValue !== null) {
            onSelectChange(newValue);
        }
    };

    return (
        <Select
            // uh, this is not working like i want so i just used the
            defaultValue={"mainnet"}
            onChange={handleSelectChange}

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
            <Option value="mainnet" label={<Typography startDecorator={
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

            <Option value="matic" label={<Typography startDecorator={
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
