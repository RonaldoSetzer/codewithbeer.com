/* eslint react/prop-types: 0 */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import media from 'styled-media-query';

const Container = styled.div`
  width: 7rem;
  height: 7rem;
  box-sizing: border-box;
  margin: 1rem;

  ${media.lessThan('large')`
    width: 3rem;
    height: 3rem;
  `}
`;

function Logo() {
  const { mobile, desktop } = useStaticQuery(
    graphql`
      query {
        mobile: file(relativePath: { eq: "beer-mobile.png" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktop: file(relativePath: { eq: "beer-desktop.png" }) {
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

export default Logo;
