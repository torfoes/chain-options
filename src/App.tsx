import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useGlobalState} from "./utils/GlobalState";
import Layout from "./components/Layout";


import {
    Box,
    Button,
    CssBaseline,
    CssVarsProvider, IconButton, Input, Typography,
} from '@mui/joy';
import {Menu} from "@mui/icons-material";



function App() {
  const [state, dispatch] = useGlobalState();

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
              <Button/>
          </Layout.Header>


      </CssVarsProvider>
  );
}

export default App;
