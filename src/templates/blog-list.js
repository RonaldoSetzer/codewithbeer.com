/* eslint react/prop-types: 0 */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import GlobalStyles from '../styles/global';
import PostItem from '../components/PostItem';
import Pagination from '../components/Pagination/Pagination';

const List = styled.div`
  ${media.lessThan('large')`
    margin-bottom: 4rem;
    width: 100vw;
  `}
`;

function BlogList({ data, pageContext: { currentPage, numPages } }) {
  const { allMdx } = data;
  const postList = allMdx.edges;

  return (
    <Layout>
      <GlobalStyles />
      <SEO title="Home" />
      <List id="list">
        {postList.map(
          ({
            node: {
              frontmatter: { tags, date, description, title },
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
              tags={tags}
              timeToRead={timeToRead}
            />
          )
        )}
        <Pagination numPages={numPages} currentPage={currentPage} />
      </List>
    </Layout>
  );
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(locale: "en-us", formatString: "DD MMM YYYY")
            description
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogList;
