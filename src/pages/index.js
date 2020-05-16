import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import GlobalStyles from '../styles/global';
import PostItem from '../components/PostItem';

function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                date(locale: "en-us", formatString: "MMMM Do YYYY, h:mm a'")
                description
                category
              }
              timeToRead
            }
          }
        }
      }
    `
  );

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <GlobalStyles />
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { category, date, description, title },
          },
        }) => (
          <PostItem
            title={title}
            date={date}
            description={description}
            category={category}
          />
        )
      )}
    </Layout>
  );
}

export default IndexPage;
