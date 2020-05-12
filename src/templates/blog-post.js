/* eslint react/prop-types: 0 */
import React from 'react';
import { graphql } from 'gatsby';

function BlogPost({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
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
