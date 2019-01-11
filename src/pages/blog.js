import React from "react";
import Layouts from './components/Layouts';
import {Container} from '../styles/global';
import styled from 'styled-components';

export default ({data}) => {
  const blogData = data.allMarkdownRemark;
  console.log(data)
  return (
  <Layouts>
    <section>
      <Container>
        <h1>The Jam Blog</h1>
        <h2>{blogData.totalCount} Posts</h2>
        {
          blogData.edges.map((postNum, index)=>{
            const postDetails = postNum.node.frontmatter;
            const content = postNum.node.excerpt;
            return (
              <SinglePost key={index}>
                <h3>{postDetails.title} <span> - {postDetails.date}</span></h3>
                <p>{content}</p>
              </SinglePost>
            )
          })
        }
      </Container>
    </section>
  </Layouts>
)}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          html
        }
      }
    }
  }
`

const SinglePost = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: end;

  span {
    font-size: 2rem;
    color: #676767;
    font-weight: 400;
  }

  p {
    grid-column: 1 / 3;
  }
`