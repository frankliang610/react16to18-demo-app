import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
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

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
