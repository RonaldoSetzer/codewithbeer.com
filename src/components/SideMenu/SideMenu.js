import React from 'react';

import FolderLinks from '../FolderLinks';
import Logo from '../Logo';
import { Container, Explore, Chevron, Title, Header, Link } from './styles';
import { pages, series, categories } from './content';
import Icons from '../Icons/ListIcons';

function SideMenu() {
  const { Menu } = Icons;
  return (
    <Container>
      <Header>
        <Logo />
        <div>
          <h1>Code With Beer</h1>
          <Link to="/about">
            Ronaldo Santiago
            <span>(Developer)</span>
          </Link>
        </div>
        <Menu />
      </Header>
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

export default SideMenu;
