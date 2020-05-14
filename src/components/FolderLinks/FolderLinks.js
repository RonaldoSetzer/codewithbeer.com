/* eslint react/prop-types: 0 */
import React from 'react';

import Icons from '../Icons/ListIcons';
import { Container, Link } from './styles';

function Folderlinks({ title, links = [] }) {
  const { Folder, FileOutline, ChevronDown } = Icons;

  return (
    <Container>
      <h1>
        <ChevronDown />
        <Folder />
        {title}
      </h1>
      {links.map(({ url, label }) => (
        <Link to={url}>
          <div>
            <FileOutline />
          </div>
          {label}
        </Link>
      ))}
    </Container>
  );
}

export default Folderlinks;
