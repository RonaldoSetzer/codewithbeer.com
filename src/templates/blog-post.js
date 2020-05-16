/* eslint react/prop-types: 0 */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import GlobalStyles from '../styles/global';
import SEO from '../components/SEO';

function BlogPost({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <GlobalStyles />
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;
