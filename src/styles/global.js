import styled from 'styled-components';

export const  Container = styled.div`
  padding: 8rem 25rem;

  @media(max-width: 1440px) {
    padding: 8rem 13rem;
  }

  @media(max-width: 1024px) {
    padding: 8rem 8rem;
  }

  @media(max-width: 768px) {
    padding: 8rem 4rem;
  }
`;

export const BlogContainer = styled.div`
  padding: 0rem 3rem 8rem 3rem;
  margin: auto;
  max-width: 740px;
`;
