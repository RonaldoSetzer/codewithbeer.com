import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import GlobalStyles from '../styles/global';

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
      <h1>Code With Beer</h1>
      {postList.map(
        ({
          node: {
            frontmatter: { category, date, description, title },
          },
        }) => (
          <div>
            <title>{title}</title>
            {date}
            {description}
            {category}
          </div>
        )
      )}
    </Layout>
  );
}

export default IndexPage;
