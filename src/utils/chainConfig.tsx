import { ColorPaletteProp } from '@mui/joy/styles';
// Import your SVGs
import { ReactComponent as Ethereum } from '../assets/svg/ethereum.svg';
import { ReactComponent as Polygon } from '../assets/svg/polygon.svg';
import { ReactComponent as Optimism } from '../assets/svg/optimism.svg';


export enum ChainName {
    Mainnet = 'mainnet',
    Matic = 'matic',
    Optimism = 'optimism',
}
export const chainSVGs: { [key in ChainName]?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> } = {
    [ChainName.Mainnet]: Ethereum,
    [ChainName.Matic]: Polygon,
    [ChainName.Optimism]: Optimism,
};

export const chainColors: Record<ChainName, string> = {
    [ChainName.Mainnet]: 'neutral',
    [ChainName.Matic]: 'info',
    [ChainName.Optimism]: 'danger',
};


export const chainBaseUrls: { [key in ChainName]?: string } = {
    [ChainName.Mainnet]: 'https://etherscan.io/',
    [ChainName.Matic]: 'https://polygonscan.com/',
    [ChainName.Optimism]: 'https://optimistic.etherscan.io/',
};