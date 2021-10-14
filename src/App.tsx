/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import theme from './theme/chakra.theme';

const App = () => (
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
);

export default App;
