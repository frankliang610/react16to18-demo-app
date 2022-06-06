import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@material-ui/core';
import './index.css';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009ed8',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
