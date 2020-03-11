import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SideMenu from '../SideMenu';

const Container = styled.section`
  display: flex;
`;

const Content = styled.main`
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
`;

const Layout = ({ children }) => (
  <Container>
    <SideMenu />
    <Content>{children}</Content>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
