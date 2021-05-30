/* eslint react/prop-types: 0 */
import React from 'react';
import { Container, Time } from './styles';

function PostTitle({ date, title, timeToRead }) {
  const [day, month, year] = date ? date.split(' ') : [0, 0, 0];
  const time = `${day}-${month}-${year}`;
  return (
    <Container>
      <h1>{title}</h1>
      <div>
        {date && <Time>{time}</Time>}
        {timeToRead && <span>{`• ${timeToRead} min read`}</span>}
      </div>
    </Container>
  );
}

export default PostTitle;
