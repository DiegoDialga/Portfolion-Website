import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme'
import { ColorModeScript , ChakraProvider} from '@chakra-ui/react';

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);

