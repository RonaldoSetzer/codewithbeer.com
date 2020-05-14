import React from 'react';

import SocialLinks from '../SocialLinks';
import FolderLinks from '../FolderLinks';
import { Container, Content, Chevron, Title, Link } from './styles';
import { pages, series, categories } from './content';

function SideMenu() {
  return (
    <Container>
      <SocialLinks />
      <Content>
        <Title>
          <Chevron />
          PROFILE
        </Title>
        <Link to="/about">
          RONALDO SANTIAGO
          <br />
          Senior Developer
        </Link>
        <Title>
          <Chevron />
          CODE • WITH • BEER
        </Title>
        <FolderLinks title={pages.title} links={pages.links} />
        <FolderLinks title={series.title} links={series.links} />
        <FolderLinks title={categories.title} links={categories.links} />
      </Content>
    </Container>
  );
}

export default SideMenu;
