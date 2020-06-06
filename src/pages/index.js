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

function IndexPage({ data }) {
  const { allMarkdownRemark } = data;
  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <GlobalStyles />
      <SEO title="Home" />
      <List id="list">
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
  query PostList {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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

export default IndexPage;
