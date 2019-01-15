import React from "react";
import Layouts from './components/Layouts';
import { BlogContainer } from '../styles/global';
import styled from 'styled-components';
import { Link,graphql } from 'gatsby';
import FrontBanner from './components/FrontBanner';
import removeSpecialChar from '../utils/utility';

export default ({data}) => {
  const blogData = data.allMarkdownRemark;
  return (
  <Layouts>
    <section>
      <FrontBanner 
        title="Jam with me" 
        description="" 
        imageheight="300px" />
    </section>
    <section>
      <BlogContainer>
        <h2>{blogData.totalCount} Posts</h2>
        {
          blogData.edges.map((postNum, index)=>{
            const postDetails = postNum.node.frontmatter;
            const pageLink = removeSpecialChar(postDetails.title.toLowerCase().split(' ').join('-'));
            return (
              <SinglePost key={index}>
                <Link to={`blog/${pageLink}`}><h3>{postDetails.title}</h3></Link>
                <h4>{postDetails.date}</h4>
                <p>{postNum.node.excerpt}</p>
              </SinglePost>
            )
          })
        }
      </BlogContainer>
    </section>
  </Layouts>
)}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

const SinglePost = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: end;
  font-family: 'Sarabun', sans-serif;
  
  span {
    font-size: 2rem;
    color: #676767;
    font-weight: 400;
  }

  h3 {
    margin-bottom: 1rem;
  }

  h4 {
    margin-top: 0;
    color: #5b5b5b;
    font-weight: 400;
  }

  p {
    grid-column: 1 / 3;
  }
  img {
    width: 100%;
  }
`