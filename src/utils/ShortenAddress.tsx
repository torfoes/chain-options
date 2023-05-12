interface shortenAddressProps {
    address: string | null | undefined;
    numberOfCharacters?: number;
}

export function shortenAddress(address: string | null | undefined, numberOfCharacters: number = 6): string {
    if (!address || address.length < numberOfCharacters * 2 + 2) {
        return address ?? 'N/A';
    }

    const start = address.slice(0, numberOfCharacters + 2);
    const end = address.slice(-numberOfCharacters);
    return `${start}...${end}`;
}
