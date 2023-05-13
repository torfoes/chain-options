import { AccordionHeader, AccordionContent } from './JoyAccordion';
import { useGlobalState } from '../utils/GlobalState';

import * as React from 'react';
import { useEffect, useState } from 'react';

import ListDivider from '@mui/joy/ListDivider';
import Typography from '@mui/joy/Typography';

import * as Accordion from '@radix-ui/react-accordion';

import { Transaction, TransactionLike } from 'ethers';
import { shortenAddress } from "../utils/ShortenAddress";

interface TransactionAccordionProps {
    hashes: readonly string[];
    length?: number;
}

const TransactionAccordion: React.FC<TransactionAccordionProps> = ({ hashes, length = 8 }) => {
    const [{ infuraProvider }] = useGlobalState();
    const [transactions, setTransactions] = useState<(Transaction | null)[]>([]);
    const [openItem, setOpenItem] = useState<string>("");

    const fetchTransaction = async (index: number) => {
        const hash = hashes[index];
        const transactionResponse = await infuraProvider?.getTransaction(hash);
        if (transactionResponse) {
            const transaction = Transaction.from(transactionResponse as TransactionLike);
            setTransactions((prevTransactions) => {
                const newTransactions = [...prevTransactions];
                newTransactions[index] = transaction;
                return newTransactions;
            });
        }
    };

    const handleValueChange = (value: string) => {
        if (value === openItem) {
            setOpenItem("");
        } else {
            setOpenItem(value);
            const index = hashes.indexOf(value);
            if (index !== -1 && !transactions[index]) {
                fetchTransaction(index);
            }
        }
    };

    useEffect(() => {
        setTransactions(new Array(hashes.length).fill(null));
    }, [hashes]);

    return (
        <>
            <Accordion.Root
                type="single"
    defaultValue=""
    value={openItem}
    onValueChange={handleValueChange}
        >
        {hashes.slice(0, length).map((hash, index) => (
                <React.Fragment key={hash}>
                <Accordion.Item value={hash}>
                <AccordionHeader onClick={() => handleValueChange(hash)}>
    {shortenAddress(hash)}
    </AccordionHeader>
    {transactions[index] && (
        <AccordionContent>
            <Typography>
                <strong>From:</strong> {shortenAddress(transactions[index]?.from)}
    <br />
    <strong>To:</strong> {shortenAddress(transactions[index]?.to)}
    <br />
    <strong>Value:</strong> {transactions[index]?.value.toString()} wei
    <br />
    <strong>Nonce:</strong> {transactions[index]?.nonce}
    <br />
    <strong>Gas Limit:</strong> {transactions[index]?.gasLimit.toString()}
    </Typography>
    </AccordionContent>
    )}
    </Accordion.Item>
    {index !== hashes.length - 1 && <ListDivider component="div" />}
    </React.Fragment>
))}
    </Accordion.Root>
    </>
);
};

export default TransactionAccordion;
