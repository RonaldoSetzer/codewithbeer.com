/* eslint react/prop-types: 0 */
import React, { useState } from 'react';

import Icons from '../Icons/ListIcons';
import { Container, Content, Link, Button } from './styles';

function Folderlinks({ title, links = [] }) {
  const { Folder, FileOutline, ChevronDown, ChevronRight } = Icons;

  const [isOpen, setIsOpen] = useState(true);
  const handleVisibility = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Button onClick={handleVisibility}>
        {isOpen ? <ChevronDown /> : <ChevronRight />}
        <Folder />
        {title}
      </Button>
      <Content isOpen={isOpen}>
        {links.map(({ url, label }) => (
          <Link to={url} key={label}>
            <div>
              <FileOutline />
            </div>
            {label}
          </Link>
        ))}
      </Content>
    </Container>
  );
}

export default Folderlinks;
