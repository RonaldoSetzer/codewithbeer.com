/* eslint react/prop-types: 0 */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--background-light);
  width: 6rem;
  height: 6rem;
  border-radius: 90px;
  border: 6px solid orange;
  box-sizing: border-box;
  margin: 1rem;
`;

function Logo() {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "beer-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 60, maxHeight: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <Container>
      <Img fluid={logo.childImageSharp.fluid} />
    </Container>
  );
}

export default Logo;
