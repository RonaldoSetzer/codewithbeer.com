/* eslint react/prop-types: 0 */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import GlobalStyles from '../styles/global';
import { MainContent, MainContainer, Highlight } from '../styles/base';
import SEO from '../components/SEO';
import PostTitle from '../components/PostTitle';

function BlogPost({ data }) {
  const {
    frontmatter: { title, date },
    timeToRead,
    html,
  } = data.markdownRemark;
  return (
    <Layout>
      <GlobalStyles />
      <SEO title={title} />
      <MainContainer>
        <PostTitle date={date} title={title} />
        <p>
          <Highlight>
            <strong>Ronaldo Santiago</strong>
            {` - ${timeToRead} min read`}
          </Highlight>
        </p>
        <MainContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </MainContent>
      </MainContainer>
    </Layout>
  );
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(locale: "en-us", formatString: "DD MMM YYYY")
      }
    }
  }
`;

export default BlogPost;
