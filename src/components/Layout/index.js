import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SideMenu from '../SideMenu';
import SocialLinks from '../SocialLinks';

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`;
function Layout({ children }) {
  return (
    <Container>
      <SocialLinks />
      <SideMenu />
      {children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
