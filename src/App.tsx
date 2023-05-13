import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useGlobalState} from "./utils/GlobalState";
import Layout from "./components/Layout";


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
import KeccakDivider from "./components/KeccakDivider";
import EthPriceDisplay from "./components/EthPriceDisplay";


function App() {
    const [state, dispatch, setNetwork] = useGlobalState();



  return (
      <CssVarsProvider defaultMode="dark">
        <CssBaseline />
          <Layout.Header>
              <IconButton variant={'plain'} color={'neutral'}>
                  <Menu/>
              </IconButton>
              <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'flex-start' }}>
                  <Typography level='h5' variant={'plain'} color={'neutral'}>Block Explorer</Typography>
              </Box>

              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}> {/* Add this wrapper */}
                  <Input
                      size="md"
                      placeholder="Search by block / transaction / address…"
                      // startDecorator={<SearchRoundedIcon color="disabled" />}
                      sx={{
                          flexBasis: '500px',
                          display: {
                              xs: 'none',

                              sm: 'flex',
                          },
                      }}
                  />
              </Box>
              <EthPriceDisplay/>
          </Layout.Header>

          <ChainSelect/>

          <Stack direction={"column"}>
              <BlockChain chainName={'mainnet'} useWebSocketProvider={true}/>
              <Divider/>
              <BlockChain chainName={'matic'} useWebSocketProvider={false}/>
          </Stack>
          <KeccakDivider/>
      </CssVarsProvider>
  );
}

export default App;
