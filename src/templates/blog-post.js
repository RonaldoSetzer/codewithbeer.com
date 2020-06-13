/* eslint react/prop-types: 0 */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import GlobalStyles from '../styles/global';
import { MainContent, MainContainer, Highlight } from '../styles/base';
import SEO from '../components/SEO';
import PostTitle from '../components/PostTitle';
import Comments from '../components/Comments/Comments';

function BlogPost({ data }) {
  const {
    frontmatter: { title, date },
    fields: { slug },
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
        <Comments title={title} url={slug} />
      </MainContainer>
    </Layout>
  );
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(locale: "en-us", formatString: "DD MMM YYYY")
      }
    }
  }
`;

export default BlogPost;
