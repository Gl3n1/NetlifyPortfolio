import React from "react";
import { Normalize } from 'styled-normalize';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import bannerImage from '../../static/img/fire.jpg';
import me from '../../static/img/me.jpg';

import {Container} from '../styles/global';

export default () => (
  <React.Fragment>
    <GlobalStyle />
    <Normalize />
    <Globals>
      <section>
        <FrontBanner>
          <DarkOverlay>
            <Title>
              JAM Spread Ninja
            </Title>
            <TitleDesc>
              Personal portfolio of Glen Lexry Wan <br></br> Currently under construction!
            </TitleDesc>
          </DarkOverlay>
        </FrontBanner>
      </section>
      {/* <section>
        <Container>
          <h1>About Me</h1>
          <div>
            I work as a front end developer/software developer... Basically, i handle the User 
            Interface and handle your experince on the web, without the user throwing the
            keyboard/mouse across the room, definately a plus. Anyway, i'm Glen and i've been
            teaching myself how to code for over a year now and i love every part of it! ooohhh, and
            provide me coffee and i could sit for hours writing Javascript.
          </div>
          <img src={me}></img>
        </Container>
      </section> */}
    </Globals>  
  </React.Fragment>
)

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

const Globals = styled.div`
  font-family: 'Montserrat', sans-serif;
`

const FrontBanner = styled.div`
  background-image: url('${bannerImage}');
  height: 100vh;
  width: 100vw;
  background-size: 100%;
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`

const TitleDesc = styled.h3`
  font-size: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
`

const DarkOverlay = styled.div`
  background-color: rgba(0,0,0,0.5);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
