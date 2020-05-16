/* eslint react/prop-types: 0 */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import GlobalStyles from '../styles/global';
import SEO from '../components/SEO';
import { PostWrapper, MainContent } from '../components/Post/styles';

function BlogPost({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <GlobalStyles />
      <SEO title={frontmatter.title} />
      <PostWrapper>
        <MainContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </MainContent>
      </PostWrapper>
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
