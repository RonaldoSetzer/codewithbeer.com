import React from 'react';

import Icons from '../Icons/ListIcons';
import Links from './content';
import { Container, Link, List, ListItem } from './styles';

function SocialLinks() {
  return (
    <Container>
      <List>
        {Links.map(({ label, url }) => {
          const Icon = Icons[label];
          return (
            <ListItem key={label}>
              <Link
                href={url}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

export default SocialLinks;
