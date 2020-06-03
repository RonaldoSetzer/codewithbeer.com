/* eslint react/prop-types: 0 */
import React from 'react';
import { Container, Time } from './styles';

function PostTitle({ date, title }) {
  const [day, month, year] = date.split(' ');
  return (
    <Container>
      <Time>
        <span>{day}</span>
        <div>
          <p>{month}</p>
          <p>{year}</p>
        </div>
      </Time>
      <h1>{title}</h1>
    </Container>
  );
}

export default PostTitle;
