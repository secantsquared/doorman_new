/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Grommet, Box, Button } from 'grommet';
import Head from '../components/Head';
import AppBar from '../components/AppBar';
import Router from 'next/router';

const theme = {
  global: {
    font: {
      family: 'Open Sans',
      size: '14px',
      height: '20px'
    }
  }
};

const Home = () => {
  return (
    <Grommet theme={theme} full>
      <Head title="Home" />
      <AppBar />
      <Box fill justify="center" align="center">
        <Button onClick={handler} />
      </Box>
    </Grommet>
  );
};

export default Home;
