import React from 'react'
import { Link,graphql } from 'gatsby';
import Layout from '../pages/components/Layouts';
import { BlogContainer } from '../styles/global';
import styled from 'styled-components';
import { Helmet } from "react-helmet";

class BlogPostTemplate extends React.PureComponent {
  render() {
    console.log(this.props)
    const { data } = this.props;
    const html = () => {
      return {__html: data.markdownRemark.html}
    }
    return (
      <Layout>
        <Helmet>
          <meta name="description" content={data.markdownRemark.excerpt}/>
          <meta name="author" content="Glen Lexry Wan" />
        </Helmet>
        <BlogContainer>
          <SinglePost>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <h3>{data.markdownRemark.frontmatter.date}</h3>
            <div dangerouslySetInnerHTML={html()} ></div>
            <Link to="/blog" >Back</Link>
          </SinglePost>
        </BlogContainer>
      </Layout>
    )
  }
}

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
  
  span, a {
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