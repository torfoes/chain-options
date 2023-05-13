import React, { useState } from "react";
import { Box, Chip, Modal, Typography, Sheet, ModalClose } from "@mui/joy";
import { Block } from "ethers";
import {shortenAddress} from "../utils/ShortenAddress";

interface MerkleChipProps {
    block: Block;
}

const MerkleChip: React.FC<MerkleChipProps> = ({ block }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Chip
                color="primary"
                onClick={handleOpen}
            >
                Merkle Root: ${shortenAddress(block.hash, 5)}
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
                        maxWidth: 400,
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
                        The Merkle Root for this block is {block.parentHash}.

                        The Merkle Root is calculated by taking the hashes of all the transactions in the block, pairing them up, hashing the pairs, pairing up those results, and so on until only one hash remains - the Merkle Root. This ensures that even a small change in any transaction will result in a different Merkle Root.
                    </Typography>
                </Sheet>
            </Modal>
        </>
    );
};

export default MerkleChip;
