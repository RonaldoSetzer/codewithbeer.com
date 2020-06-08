/* eslint react/prop-types: 0 */
import React from 'react';
import { Container, Time } from './styles';

function PostTitle({ date, title }) {
  const [day, month, year] = date ? date.split(' ') : [0, 0, 0];
  return (
    <Container>
      {date && (
        <Time>
          <span>{day}</span>
          <div>
            <p>{month}</p>
            <p>{year}</p>
          </div>
        </Time>
      )}
      <h1>{title}</h1>
    </Container>
  );
}

export default PostTitle;
