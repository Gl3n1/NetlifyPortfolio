import React from 'react';
import AppBar from './AppBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import '../../styles/fonts.css';

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

const Layout = (props) => {
  const { children } = props;
  return (
    <MuiThemeProvider theme={theme} >
      <Normalize />
      <Globals />
      <AppBar theme={theme} />
      <Scrollbars style={{ width: "100vw", height: "100vh" }}>
      {children}
      </Scrollbars>
    </MuiThemeProvider>
  )
}

const Globals = createGlobalStyle`
  html {
    font-family: Sarabun, sans-serif;
    line-height: 1.3;
    max-width: 100vw;
    font-size: 62.5%;
  }

  h1 {
    font-size: 7rem;
  }

  h2 {
    font-size: 3.4rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2rem;
  }

  p {
    font-size: 2rem;
    font-family: 'Open Sans', sans-serif !important;
  }

  @media (max-width: 768px) {
    html {
      font-size: 40%;
    }
  }
  
`

export default Layout;