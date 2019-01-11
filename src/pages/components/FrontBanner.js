import React from 'react';
import styled from 'styled-components';
import bannerImage from '../../../static/img/bg2.jpg';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";


export default () => (
  <StaticQuery 
    query={graphql`
      query {
        file(relativePath: {eq: "bg2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }      
    `}
    render={data => {
      return (
        <MyBackgroundImage>
          <Img fluid={data.file.childImageSharp.fluid} style={{position: "inherit"}} />
          <DarkOverlay>
            <Title>
              JAM Spread Ninja
            </Title>
            <TitleDesc>
              Personal portfolio of Glen Lexry Wan
            </TitleDesc>
          </DarkOverlay>
        </MyBackgroundImage>
      )
    }}
  />
)

const MyBackgroundImage = styled.div`
  height: 100vh;
  color: #fff;
  text-align: center;

  h1, h3 {
    padding: 0 20px;
    margin: 1rem;;
  }

  img {
    position: absolute;
    max-height:100vh;
    
    object-fit: cover;
    object-position: center;
  }
`;

const DarkOverlay = styled.div`
  background-color: rgba(0,0,0,0.6);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

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