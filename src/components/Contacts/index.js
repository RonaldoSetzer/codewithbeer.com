/* eslint react/no-unescaped-entities: 0 */
import React from 'react';

import Icons from '../Icons/ListIcons';
import { Container, Button } from './styles';

function Contacts() {
  const linkedin = 'https://www.linkedin.com/in/ronaldo-santiago/';
  const { Steam, Discord, Linkedin } = Icons;
  return (
    <Container>
      <Button>
        <a href={linkedin}>
          <Linkedin />
          Linkedin
        </a>
      </Button>
      <Button>
        <Steam />
        RonaldoSetzer
      </Button>
      <Button>
        <Discord />
        RonaldoSetzer#4317
      </Button>
    </Container>
  );
}

export default Contacts;
