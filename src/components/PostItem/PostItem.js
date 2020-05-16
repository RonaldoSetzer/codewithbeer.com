/* eslint react/prop-types: 0 */
import React from 'react';
import { Container } from './styles';

function PostItem({ title, date, description, category }) {
  return (
    <Container>
      <ul>
        <li>{title}</li>
        <li>{date}</li>
        <li>{description}</li>
        <li>{category}</li>
      </ul>
    </Container>
  );
}

export default PostItem;
