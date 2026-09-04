import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  // La fuente y el fondo base se definen acá para que Chakra no los pise:
  // sin esto, Chakra aplica su reset (fuente del sistema + gris #1A202C).
  fonts: {
    heading: "'Space Grotesk', 'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      'html, body': {
        background: '#08090f',
        color: '#f1f5f9',
        fontFamily: "'Inter', sans-serif",
      },
      '#root': {
        color: '#f1f5f9',
        fontFamily: "'Inter', sans-serif",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
