import React, { useState } from "react";
import { Box, Chip, Modal, Typography, Sheet, ModalClose } from "@mui/joy";

//ADD MODAL TO THIS COMPONENT AND SHOW HOW KECCAK IS CALCULATED AFTER YOUR GET THE LINES WORKING
export default function KeccakDivider() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Chip
                color="success"
                onClick={handleOpen}
                sx={{
                    transform: "rotate(90deg)",
                    zIndex: 2,
                }}
            >
                Keccak256
            </Chip>

            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={handleClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose
                        variant="outlined"
                        onClick={handleClose}
                        sx={{
                            top: 'calc(-1/4 * var(--IconButton-size))',
                            right: 'calc(-1/4 * var(--IconButton-size))',
                            boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                            borderRadius: '50%',
                            bgcolor: 'background.body',
                        }}
                    />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        Block Information
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        // Replace this with the actual block information
                        This is placeholder block information.
                    </Typography>
                </Sheet>
            </Modal>
        </>
    );
};
