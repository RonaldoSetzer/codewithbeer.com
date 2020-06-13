/* eslint react/prop-types: 0 */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import GlobalStyles from '../styles/global';
import PostItem from '../components/PostItem';

const List = styled.div`
  ${media.lessThan('large')`
    margin-bottom: 4rem;
    width: 100vw;
  `}
`;

const Title = styled.h2`
  color: var(--font-colorful);
  font-size: 2.1rem;
  font-weight: 700;
  margin: 2rem 1rem 3rem;
  border-bottom: 2px solid var(--background-colorful);
`;

function BlogTags({ data, pageContext: { tag } }) {
  const { allMarkdownRemark } = data;
  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <GlobalStyles />
      <SEO title="Home" />
      <List>
        <Title>{`# ${tag}`}</Title>
        {postList.map(
          ({
            node: {
              frontmatter: { category, date, description, title },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              key={slug}
              slug={slug}
              title={title}
              date={date}
              description={description}
              category={category}
              timeToRead={timeToRead}
            />
          )
        )}
      </List>
    </Layout>
  );
}

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { in: [$tag] } } }
      limit: 2000
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(locale: "en-us", formatString: "DD MMM YYYY")
            description
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogTags;
