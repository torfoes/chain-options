import React from "react";
import { Box, Chip, Modal } from "@mui/joy";

//ADD MODAL TO THIS COMPONENT AND SHOW HOW KECCAK IS CALCULATED AFTER YOUR GET THE LINES WORKING
export default function KeccakDivider() {
    return (


        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    height: "100%",
                    width: "1px",
                    backgroundColor: "black",
                    zIndex: 1,
                }}
            />

            <Chip color="success" sx={{
                    transform: "rotate(90deg)",
                    zIndex: 2,
                }}>
                Keccak256
            </Chip>

        </Box>

    );
};
