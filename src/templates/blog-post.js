/* eslint react/prop-types: 0 */
import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import GlobalStyles from '../styles/global';
import { MainContent, MainContainer } from '../styles/base';
import SEO from '../components/SEO';
import PostTitle from '../components/PostTitle';
import Comments from '../components/Comments/Comments';

function BlogPost({ data }) {
  const {
    frontmatter: { title, date, cover, description },
    fields: { slug },
    timeToRead,
    body,
  } = data.mdx;
  return (
    <Layout>
      <GlobalStyles />
      <SEO title={title} description={description} image={cover} />
      <MainContainer>
        <PostTitle date={date} title={title} timeToRead={timeToRead} />
        <MainContent>
          <MDXRenderer>{body}</MDXRenderer>
        </MainContent>
        <Comments title={title} url={slug} />
      </MainContainer>
    </Layout>
  );
}

export const query = graphql`
  query Post($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(locale: "en-us", formatString: "DD MMM YYYY")
        cover
        description
      }
    }
  }
`;

export default BlogPost;
