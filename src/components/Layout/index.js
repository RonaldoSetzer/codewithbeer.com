import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SideMenu from '../SideMenu';
import SocialLinks from '../SocialLinks';
import Header from '../Header';

import { Container, Main } from './styles';

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Container>
      <SocialLinks />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <SideMenu isMenuOpen={isMenuOpen} />
      <Main>{children}</Main>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
