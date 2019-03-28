/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Grommet, Box } from 'grommet';
import Head from '../components/Head';
import AppBar from '../components/AppBar';
import Button from '../components/Button';

const theme = {
  global: {
    font: {
      family: 'Open Sans',
      size: '14px',
      height: '20px'
    }
  }
};

const Home = () => (
  <Grommet theme={theme} full>
    <Head title="Home" />
    <AppBar />
    <Box fill justify="center" align="center">
      <Button />
    </Box>
  </Grommet>
);

export default Home;
