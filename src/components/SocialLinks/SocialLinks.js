import React from 'react';

import Icons from '../Icons/ListIcons';
import Links from './content';
import { Container, ALink, GLink, List, ListItem, Separator } from './styles';

function SocialLinks() {
  return (
    <Container>
      <List>
        {Links.map(({ label, url }) => {
          if (label === '---') {
            return <Separator />;
          }
          const Icon = Icons[label];
          const Link = url.charAt(0) === '/' ? GLink : ALink;

          return (
            <ListItem key={label}>
              <Link
                href={url}
                to={url}
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
