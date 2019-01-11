import React from 'react';
import AppBar from './AppBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(233,30,99,0.8)'
    },
    secondary: {
      main: '#e91e63',
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 20
  }
});

const Layout = ({ children }) => {
  console.log()
  return (
    <MuiThemeProvider theme={theme} >
      <Normalize />
      <Globals />
      <AppBar theme={theme} />
      {children}
    </MuiThemeProvider>
  )
}

const Globals = createGlobalStyle`
  html {
    font-family: 'Sarabun', sans-serif;
    line-height: 1.3;
    max-width: 100vw;
    font-size: 62.5%;
  }

  h1 {
    font-size: 7rem;
  }

  h2 {
    font-size: 4rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2rem;
  }

  p {
    font-size: 2.5rem;
    font-family: 'Open Sans', sans-serif !important;
  }

  @media (max-width: 768px) {
    html {
      font-size: 40%;
    }
  }
  
`

export default Layout;