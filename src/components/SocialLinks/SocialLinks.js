import React from 'react';
import { Link } from 'gatsby';

import Icons from '../Icons/ListIcons';
import Links from './content';
import ToggleTheme from '../ToggleTheme';
import { Container, List, ListItem, Separator } from './styles';

function SocialLinks() {
  const { Home, Search } = Icons;
  return (
    <Container>
      <List>
        <Link to="/">
          <Home />
        </Link>
        <Link to="/search">
          <Search />
        </Link>
        <ToggleTheme />
        <Separator />
        {Links.map(({ label, url }) => {
          const Icon = Icons[label];

          return (
            <ListItem key={label}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

export default SocialLinks;
