import React from 'react';
import PropTypes from 'prop-types';

import { Container, Link } from './styles';
import Icons from '../Icons/ListIcons';
import Logo from '../Logo';

function Header({ isMenuOpen, setIsMenuOpen }) {
  const { Menu } = Icons;

  const handleMenuOpen = e => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <h1>Code With Beer</h1>
        <Link to="/about">
          Ronaldo Santiago
          <span>(Developer)</span>
        </Link>
      </div>
      <Menu onClick={handleMenuOpen} />
    </Container>
  );
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

export default Header;
