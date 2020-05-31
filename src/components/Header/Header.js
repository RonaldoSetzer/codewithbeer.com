import React from 'react';

import { Container, Link } from './styles';
import Icons from '../Icons/ListIcons';
import Logo from '../Logo';

function Header() {
  const { Menu } = Icons;
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
      <Menu onClick={() => {}} />
    </Container>
  );
}

export default Header;
