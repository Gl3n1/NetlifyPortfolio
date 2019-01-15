import React from 'react';
import AppBar from './AppBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import '../../styles/fonts.css';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(61, 21, 95,0.95)'
    },
    secondary: {
      main: '#df678c',
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
    <Scrollbars universal style={{ width: "100vw", height: "100vh" }}>
      <MuiThemeProvider theme={theme} >
        <Normalize />
        <Globals />
        <AppBar theme={theme} />
        {children}
      </MuiThemeProvider>
    </Scrollbars>
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
    position: relative;

    &::after {
      content: '';
      width: 38px;
      height: 3px;
      background-color: #df678c;
      position: absolute;
      transform: translateY(5rem);
      left: 0;
    }
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2rem;
  }

  p, ol {
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