import React from "React";
import styled from 'styled-components';
import bannerImage from '../../static/img/bg2.jpg';
import me from '../../static/img/me.jpg';
import Form from './components/Form';
import Layouts from './components/Layouts';

import {Container} from '../styles/global';

export default () => (
  <React.Fragment>
    <Layouts>
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
          <img src={me} alt="Glen"></img>
          <p>
            I work as a front end developer/software developer... Basically, i handle the User 
            Interface and handle your experince on the web and have been focusing on building web applications!
            Anyway, i'm Glen and i've been teaching myself how to code for over a year now and i love every part 
            of it including my morning cup of coffee!
          </p>
          <h2>Skills</h2>
          <div>
            <h3>React/Redux</h3>
            <p>
              React was a tough library to get a familiar with, the syntax, jsx, seemed hard to get used to but after 
              building several small applications, i slowly adjusted to how the React ecosystem worked. Now, i am able to contribute
              to my company's codebase which includes using Redux to manage the State without the state object getting over complicated
              with the React State.
            </p>
          <h3>Gulp</h3>
          <p>I am able to create my custom build tool with Gulp while i was in my previous company to help me automate my workflow and
            helped me to code faster, shipping code out sooner without degrading in quality! I have also used this tool to
            shave of the css which was not being used due to importing of large css frameworks succh as Bootstrap. Faster 
            first meaninful paint!
          </p>
          <h3>SCSS</h3>
          <p>Scss was somewhat my stepping stone to learn ReactJs, weird... maybe, but I think it has helped me think in terms
            of seperating my website into components and helps me think critcally about what styles could be shared, just like
            how components could be re-used throughout the application.
          </p>
          <h3>Semantics HTML</h3>
          <p>
            Writing code which bots understand is very important when writing mark up and trying to boost your SEO!
          </p>
          <h3>Javascript</h3>
          <p>
            I love how loosely written this language is! it helps me with my productivity by cutting out the details other
            languages stress about.
          </p>
          <h3>Git</h3>
          <p>
            What is life without a version control system!
          </p>
          </div>
          </AboutMe>
          <AboutMe>
            <h2>Currently<br></br> learning</h2>
            <div>
              <h3>GatsbyJS</h3>
              <p>I'm currently building this portofolio with GatsbyJS and i freaking love it! no need for server side code,
                gatsby helps me ship code faster than ever, and with an integration with Netlify, i can push my updates with a 
                simple git push to my repo!
              </p>
              <h3>VueJS</h3>
              <p>Recently picked up, can't wait to use this! a bit confusing after coming from React.</p>
            </div>
          </AboutMe>
          <AboutMe>
            <h2>Picking up<br></br> Soon!</h2>
            <div>
              <h3>NodeJS</h3>
              <p>I want to be able to write my own backend code with the language im most familiar with and implement
                server side rendering(NextJS) for faster page loads on top of Gatsby SSR which is already implemented here.
              </p>
              <h3>GraphQL</h3>
              <p>No more innefficient RESTful API's!</p>
            </div>
          </AboutMe>
        </Container>
        </BackgroundBg>
      </section>
      <section>
        <FormBg>
          <Container>
            <h2>Contact me</h2>
            <Form />
          </Container>
        </FormBg>
      </section>
    </Layouts> 
  </React.Fragment>
)

const FrontBanner = styled.div`
  background-image: url('${bannerImage}');
  background-position: center;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  text-align: center;

  h1, h3 {
    padding: 0 20px;
    margin: 1rem;;
  }
`;

const Title = styled.h1`
  margin-bottom: 0rem;
  font-weight: 700;
  text-shadow: 3px 2px #c60000;
`

const TitleDesc = styled.h3`
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

  h3 {
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    margin-bottom 2rem;
    text-align: justify;
  }

  @media(max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 3rem;
  }

  @media(max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 3rem;
    text-align: center;

    h2 {
      margin: 0;
    }

    img {
      margin auto;
    }

    p {
      text-align: center;
    }
  }
`

const BackgroundBg = styled.div`
  background-color: #fff;
`

const FormBg = styled.div`
  background-color: #b5c9fd;
  
  Form {
    width: 500px;
  }
  
  input, textarea, label {
    ::placeholder {
      font-size: 2rem;
    }
    font-size: 2rem;
    line-height: 2rem;
  }
  button {
    font-size: 1.5rem;
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    Form {
      width: 100%;
    }
  }
`