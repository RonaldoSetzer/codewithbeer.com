import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import GlobalStyles from '../styles/global';
import { MainContainer, MainContent } from '../styles/base';
import PostTitle from '../components/PostTitle';

function AboutPage() {
  return (
    <Layout>
      <GlobalStyles />
      <SEO title="About" />
      <MainContainer>
        <PostTitle title="About me" />
        <MainContent>
          <p>Content</p>
        </MainContent>
      </MainContainer>
    </Layout>
  );
}

export default AboutPage;
