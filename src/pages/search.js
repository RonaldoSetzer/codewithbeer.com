import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import GlobalStyles from '../styles/global';
import Search from '../components/Search';

function SearchPage() {
  return (
    <Layout>
      <GlobalStyles />
      <SEO title="Search" />
      <Search />
    </Layout>
  );
}

export default SearchPage;
