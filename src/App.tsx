import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useGlobalState} from "./utils/GlobalState";
import Layout from "./components/Layout";
import { ChainName } from './utils/chainConfig';

import {
    Box,
    Button,
    CssBaseline,
    CssVarsProvider, IconButton, Input, Select, selectClasses, Typography, Option, Divider, Stack
} from '@mui/joy';
import {KeyboardArrowDown, Menu} from "@mui/icons-material";
import ChainSelect from "./components/ChainSelect";
import BlockCard from "./components/BlockCard";
import {Block} from "ethers";
import BlockChain from "./components/BlockChain";
import EthPriceDisplay from "./components/EthPriceDisplay";
import MerkleChip from './components/MerkleChip';
import ChainDisplay from "./components/ChainDisplay";
import MerkleTree from "./components/flow/MerkleTree";

//testing some things out




function App() {
    const [state, dispatch, setNetwork] = useGlobalState();
    const [chainName, setChain] = useState<string>('mainnet');


  return (
      <CssVarsProvider defaultMode="dark">
        <CssBaseline />
          {/*<Layout.Header>*/}
          {/*    <IconButton variant={'plain'} color={'neutral'}>*/}
          {/*        <Menu/>*/}
          {/*    </IconButton>*/}
          {/*    <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'flex-start' }}>*/}
          {/*        <Typography level='h5' variant={'plain'} color={'neutral'}>Block Explorer</Typography>*/}
          {/*    </Box>*/}

          {/*    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}> /!* Add this wrapper *!/*/}
          {/*        <Input*/}
          {/*            size="md"*/}
          {/*            placeholder="Search by block / transaction / address…"*/}
          {/*            // startDecorator={<SearchRoundedIcon color="disabled" />}*/}
          {/*            sx={{*/}
          {/*                flexBasis: '500px',*/}
          {/*                display: {*/}
          {/*                    xs: 'none',*/}

          {/*                    sm: 'flex',*/}
          {/*                },*/}
          {/*            }}*/}
          {/*        />*/}
          {/*    </Box>*/}
          {/*    <EthPriceDisplay/>*/}
          {/*</Layout.Header>*/}



          {/*<Stack direction={"column"}>*/}

          {/*    <ChainDisplay/>*/}

          {/*    <Divider/>*/}

          {/*    <ChainDisplay/>*/}

          {/*</Stack>*/}


        <MerkleTree/>


      </CssVarsProvider>
  );
}

export default App;
