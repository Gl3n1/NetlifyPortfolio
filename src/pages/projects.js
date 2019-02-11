import React from 'react';
import Layouts from './components/Layouts';
import FrontBanner from './components/FrontBanner';
import vid1 from '../videos/vid-1.mp4';
import image1 from '../videos/image1.png';
import image2 from '../videos/image2.png';
import vid2 from '../videos/vid-2.mp4';
import shoppingCart from '../images/shoppingcartproject.png';
import superTodoAppImg from '../images/supertodoapp.png';
import styled from 'styled-components';

import { Container } from '../styles/global';

export default () => {
  return (
    <Layouts>
      <section>
        <FrontBanner title='Projects' description='' imageheight='300px' />
      </section>
      <section>
        <Container>
          <h2>N2N Jobs</h2>
          <h3>Stack:</h3>
          <p>Front end: ReactJs, Ant design UI, Redux</p>
          <p>Back end: Java, spring framework</p>
          <p>Database: postgresQL</p>
          <p>
						Link:{' '}
            <a href='https://n2njobs.asiaebroker.com/' target='_blank'>
							https://n2njobs.asiaebroker.com/
            </a>
          </p>
          <VideoContainer autoPlay muted loop poster={image1}>
            <source src={vid1} type='video/mp4' />
						Your browser does not support the video tag.
          </VideoContainer>
          <VideoContainer autoPlay muted loop poster={image2}>
            <source src={vid2} type='video/mp4' />
						Your browser does not support the video tag.
          </VideoContainer>
          <p>
						N2N Jobs is a platform which provides working people/fresh graduates
						to apply for vacant positions in the company. This therefore reduces
						wastage of paper documents and eases the HR departments dependency
						of physical storage. There is also a site which manages what content
						gets displayed on the client side with features such as viewing
						candidates through the system.
          </p>
        </Container>
      </section>
      <hr />
      <section>
        <Container>
          <h2>Super Todo App</h2>
          <h3>Stack:</h3>
          <p>Front end: ReactJs, Material UI, Redux</p>
          <p>Back end: Firebase</p>
          <p>Database: Firebase</p>
          <p>
						Link:{' '}
            <a href='https://super-todo-app.firebaseapp.com/' target='_blank'>
							https://super-todo-app.firebaseapp.com/
            </a>
          </p>
          <img src={superTodoAppImg} />
          <p>
						"Super Todo App" is a todo app but has firebase as a DB and hosting.
						This project was originally to keep track of my daily tasks but i
						have decided to host it publicly. For the upcoming release I plan to
						add a login feature which requires the user to be authenticated and
						the ID will retrieve the corresponding data that was originally
						inserted. Also, I will be implementing local storage which allows
						the user save the list without having to be authenticated. Hence the
						user can still use the app without having to be authenticated.
          </p>
        </Container>
      </section>
      <hr />
      <section>
        <Container>
          <h2>Shopping Cart Checkout</h2>
          <h3>Stack:</h3>
          <p>Front end: ReactJs, Material UI</p>
          <p>Back end: Firebase</p>
          <p>Database: Firebase</p>
          <p>
						Link:{' '}
            <a
              href='https://ads-checkout-test.firebaseapp.com/'
              target='_blank'>
							https://ads-checkout-test.firebaseapp.com/
            </a>
          </p>
          <FullImage src={shoppingCart} />
          <p>
						This is a small App which allows you to add advertisements into your
						cart with pricing that changes depending on the user type. You will
						be able to navigate between user type to see which plan benefits you
						the most and spend less!
          </p>
        </Container>
      </section>
    </Layouts>
  );
};

const FullImage = styled.img`
	max-width: 100%;
`;

const VideoContainer = styled.video`
	margin: 20px 0;
	width: 50%;

	@media (max-width: 780px) {
		width: 100%;
	}
`;
