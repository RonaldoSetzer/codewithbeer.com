/* eslint react/prop-types: 0 */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  width: 7rem;
  height: 7rem;
  box-sizing: border-box;
  margin: 1rem auto;
  border: 2px solid var(--main-background-colorful);
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`;

function Avatar() {
  const { mobile, desktop } = useStaticQuery(
    graphql`
      query {
        mobile: file(relativePath: { eq: "auti-ronaldo.png" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktop: file(relativePath: { eq: "auti-ronaldo.png" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const source = [
    mobile.childImageSharp.fluid,
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <Container>
      <Img fluid={source} />
    </Container>
  );
}

export default Avatar;
