import React from 'react';
import PropTypes from 'prop-types';

import SideMenu from '../SideMenu';
import SocialLinks from '../SocialLinks';

import { Container, Main } from './styles';

function Layout({ children }) {
  return (
    <Container>
      <SocialLinks />
      <SideMenu />
      <Main>{children}</Main>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
