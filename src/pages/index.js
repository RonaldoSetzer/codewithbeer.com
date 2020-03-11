import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import GlobalStyles from '../styles/global';

const IndexPage = () => (
  <Layout>
    <GlobalStyles />
    <SEO title="Home" />
    <h1>Code With Beer</h1>
  </Layout>
);

export default IndexPage;
