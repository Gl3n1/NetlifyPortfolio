import React from "react";
import { Normalize } from 'styled-normalize';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import bannerImage from '../../static/img/bg2.jpeg';
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
              Personal portfolio of Glen Lexry Wan
            </TitleDesc>
          </DarkOverlay>
        </FrontBanner>
      </section>
      <section>
        <BackgroundBg>
        <Container>
          <AboutMe>
          <img src={me}></img>
          <p>
            I work as a front end developer/software developer... Basically, i handle the User 
            Interface and handle your experince on the web and have been focusing on building web applications!
            Anyway, i'm Glen and i've been teaching myself how to code for over a year now and i love every part 
            of it including my morning cup of coffee!
          </p>
          <h2>Skills</h2>
          <div>
          <h3>React/Redux</h3>
          <br></br>
          <p>
            React was a tough library to get a familiar with, the syntax, jsx, seemed hard to get used to but after 
            building several small applications, i slowly adjusted to how the React ecosystem worked. Now, i am able to contribute
            to my company's codebase which includes using Redux to manage the State without the state object getting over complicated
            with the React State.
          </p>
          <br></br>
          <h3>Gulp</h3>
          <br></br>
          <p>I am able to create my custom build tool with Gulp while i was in my previous company to help me automate my workflow and
            helped me to code faster, shipping code out sooner without degrading in quality! I have also used this tool to
            shave of the css which was not being used due to importing of large css frameworks succh as Bootstrap. Faster 
            first meaninful paint!
          </p>
          <br></br>
          <h3>SCSS</h3>
          <br></br>
          <p>Scss was somewhat my stepping stone to learn ReactJs, weird... maybe, but I think it has helped me think in terms
            of seperating my website into components and helps me think critcally about what styles could be shared, just like
            how components could be re-used throughout the application.
          </p>
          <br></br>
          <h3>Semantics HTML</h3>
          <br></br>
          <p>
            Writing code which bots understand is very important when writing mark up and trying to boost your SEO!
          </p>
          <br></br>
          <h3>Javascript</h3>
          <br></br>
          <p>
            I love how loosely written this language is! it helps me with my productivity by cutting out the details other
            languages stress about.
          </p>
          <br></br>
          <h3>Git</h3>
          <p>
            What is life without a version control system!
          </p>
          </div>
          </AboutMe>
          <br></br>
          <AboutMe>
            <h2>Currently<br></br> learning</h2>
            <div>
              <h3>GatsbyJS</h3>
              <br></br>
              <p>I'm currently building this portofolio with GatsbyJS and i freaking love it! no need for server side code,
                gatsby helps me ship code faster than ever, and with an integration with Netlify, i can push my updates with a 
                simple git push to my repo!
              </p>
              <br></br>
              <h3>VueJS</h3>
              <br></br>
              <p>Recently picked up, can't wait to use this! a bit confusing after coming from React.</p>
            </div>
          </AboutMe>
          <AboutMe>
            <h2>Picking up<br></br> Soon!</h2>
            <div>
              <h3>NodeJS</h3>
              <br></br>
              <p>I want to be able to write my own backend code with the language im most familiar with and implement
                server side rendering(NextJS) for faster page loads.
              </p>
              <br></br>
              <h3>GraphQL</h3>
              <br></br>
              <p>No more innefficient RESTful API's!</p>
            </div>
          </AboutMe>
        </Container>
        </BackgroundBg>
      </section>
    </Globals>  
  </React.Fragment>
)

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

const Globals = styled.div`
  font-family: 'Sarabun', sans-serif;
  line-height: 1.3;

  p {
    font-size: 1.3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }
`

const FrontBanner = styled.div`
  background-image: url('${bannerImage}');
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 3.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 3px 2px #c60000;
`

const TitleDesc = styled.h3`
  font-size: 1.5rem;
  font-family: 'Sarabun', sans-serif;
  font-weight: 700;
  text-align: center;
`

const DarkOverlay = styled.div`
  background-color: rgba(0,0,0,0.6);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const AboutMe = styled.div`
  display:grid;
  grid-template-columns: 1fr 2fr;
  /* grid-template-rows: 1fr 1fr; */
  grid-row-gap: 5rem;
  color: #000;

  img {
    border-radius: 10px;
  }
`
const BackgroundBg = styled.div`
  background-color: #fff;
`