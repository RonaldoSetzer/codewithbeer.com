import React from 'react';
import PropTypes from 'prop-types';

import FolderLinks from '../FolderLinks';
import Logo from '../Logo';
import { Container, Explore, Chevron, Title, Profile, Link } from './styles';
import { pages, series, categories } from './content';

function SideMenu({ isMenuOpen }) {
  return (
    <Container isMenuOpen={isMenuOpen}>
      <Profile>
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
      </Profile>
      <Explore>
        <Title>
          <Chevron />
          EXPLORE
        </Title>
        <FolderLinks title={pages.title} links={pages.links} />
        <FolderLinks title={series.title} links={series.links} />
        <FolderLinks title={categories.title} links={categories.links} />
      </Explore>
    </Container>
  );
}

SideMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default SideMenu;
