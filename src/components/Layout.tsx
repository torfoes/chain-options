import * as React from 'react';
import Box, { BoxProps } from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Button, Card, Stack} from "@mui/joy";
import {useEffect, useRef, useState} from "react";
import PrevHashDivider from "./MerkleChip";

function Root(props: BoxProps) {
    return (
        <Box
            {...props}
            sx={[
                {
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
                        md: 'minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)',
                    },
                    gridTemplateRows: '64px 1fr',
                    minHeight: '100vh',
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
            ]}
        />
    );
}

function Header(props: BoxProps) {
    return (
        <Box
            component="header"
            className="Header"
            {...props}
            sx={[
                {
                    p: 2,
                    gap: 2,
                    bgcolor: 'background.surface',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gridColumn: '1 / -1',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1100,
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
            ]}
        />
    );
}
interface BlockLayoutProps {
    children: React.ReactNode[];
}

const ChainLayout: React.FC<BlockLayoutProps> = ({ children }) => {
    const endRef = useRef<any>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [children]);

    return (
        <Box>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="flex-start"
                alignItems="center"
                sx={{ overflowX: "auto", overflowY: "hidden", height: "100%", width: "100%", p: 2 }}
            >

                {children.map((child, index) => (
                    <>
                        <Box key={index} flexShrink={0} id={`block-${index}`}>
                            {child}
                        </Box>

                        <Box>
                            {index !== (children.length -1) ? <ArrowForwardIcon /> : null}
                        </Box>
                    </>

                ))}
                <div ref={endRef} />
            </Stack>
        </Box>
    );
};


export default {
    Root,
    Header,
    BlockLayout: ChainLayout,
};
