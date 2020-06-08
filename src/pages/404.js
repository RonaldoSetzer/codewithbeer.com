import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import GlobalStyles from '../styles/global';
import { MainContainer, MainContent } from '../styles/base';
import PostTitle from '../components/PostTitle';

function NotFoundPage() {
  return (
    <Layout>
      <GlobalStyles />
      <SEO title="404: Not found" />
      <MainContainer>
        <PostTitle title="404" />
        <MainContent>
          <h1>Ops</h1>
        </MainContent>
      </MainContainer>
    </Layout>
  );
}

export default NotFoundPage;
