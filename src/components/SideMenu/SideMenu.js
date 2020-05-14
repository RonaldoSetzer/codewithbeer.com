import React from 'react';

import SocialLinks from '../SocialLinks';
import FolderLinks from '../FolderLinks';
import Logo from '../Logo';
import { Container, Content, Chevron, Title, Link } from './styles';
import { pages, series, categories } from './content';

function SideMenu() {
  return (
    <Container>
      <SocialLinks />
      <Content>
        <Logo />
        <Link to="/about">
          Ronaldo Santiago
          <span>Developer</span>
        </Link>
        <Title>
          <Chevron />
          EXPLORE
        </Title>
        <FolderLinks title={pages.title} links={pages.links} />
        <FolderLinks title={series.title} links={series.links} />
        <FolderLinks title={categories.title} links={categories.links} />
      </Content>
    </Container>
  );
}

export default SideMenu;
