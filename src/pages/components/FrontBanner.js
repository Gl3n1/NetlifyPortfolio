import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default (props) => {
  return (
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
      const { title, description, imageheight } = props
      return (
        <MyBackgroundImage imageheight={imageheight} >
          <Img fluid={data.file.childImageSharp.fluid} style={{
            position: "absolute", 
            height: `${imageheight}`,
            width: '100%',
            }} />
          <DarkOverlay imageheight={imageheight} >
            <Title>
              {title}
            </Title>
            <TitleDesc>
              {description}
            </TitleDesc>
          </DarkOverlay>
        </MyBackgroundImage>
      )
    }}
  />
  )
}

const MyBackgroundImage = styled.div`
  height: ${props => props.imageheight};
  color: #fff;  
  text-align: center;

  h1, h3 {
    padding: 0 20px;
    margin: 1rem;
  }

  img {
    position: absolute;
    max-height:100vh;
    max-width: 100vw;
    object-fit: cover;
    object-position: center;
  }
`;

const DarkOverlay = styled.div`
  background-color: rgba(0,0,0,0.6);
  position: absolute;
  height: ${props => props.imageheight};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin-bottom: 0rem;
  font-weight: 700;
`

const TitleDesc = styled.h3`
  font-family: 'Sarabun', sans-serif;
  font-weight: 700;
  text-align: center;
`