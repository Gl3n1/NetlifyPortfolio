import React from 'react';
import Layouts from './components/Layouts';
import FrontBanner from './components/FrontBanner';
import vid1 from '../videos/vid-1.mp4';
import image1 from '../videos/image1.png';
import image2 from '../videos/image2.png';
import vid2 from '../videos/vid-2.mp4';
import styled from 'styled-components';

import {Container} from '../styles/global';

export default () => {
  return (
    <Layouts>
      <section>
        <FrontBanner 
          title="Projects" 
          description="" 
          imageheight="300px"
        />
      </section>
      <section>
        <Container>
          <h2>N2N Jobs</h2>
          <h3>Stack:</h3>
          <p>Front end: ReactJs, Ant design UI, Redux</p>
          <p>Back end: Java, spring framework</p>
          <p>Database: postgresQL</p>
          <p>Link: <a href="https://n2njobs.asiaebroker.com/" target="_blank">https://n2njobs.asiaebroker.com/</a></p>
          <VideoContainer autoPlay muted loop poster={image1}>
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </VideoContainer>
          <VideoContainer autoPlay muted loop poster={image2}>
            <source src={vid2} type="video/mp4" />
            Your browser does not support the video tag.
          </VideoContainer>
          <p>N2N Jobs is a platform which provides working people/fresh graduates to apply for vacant positions in the company. This therefore reduces wastage of paper documents and eases the HR departments dependency of physical storage. There is also a site which manages what content gets displayed on the client side with features such as viewing candidates through the system.
          </p>
          <hr />
        </Container>
      </section>
    </Layouts>
  )
}

const VideoContainer = styled.video`
  margin: 20px 0;
  width: 50%;

  @media (max-width: 780px) {
    width: 100%;
  }
`