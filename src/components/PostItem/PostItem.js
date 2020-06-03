/* eslint react/prop-types: 0 */
import React from 'react';
import { Container, Header, Tag, Footer, Content, Link, Time } from './styles';

function PostItem({ title, date, description, category, timeToRead, slug }) {
  const [day, month, year] = date.split(' ');
  return (
    <Container>
      <Link to={slug}>
        <Header>
          <Time>
            <span>{day}</span>
            <div>
              <p>{month}</p>
              <p>{year}</p>
            </div>
          </Time>
          <h1>{title}</h1>
        </Header>
      </Link>
      <Content>
        <p>{description}</p>
        <p>{`${timeToRead} min read`}</p>
      </Content>
      <Footer>
        <Tag>{category}</Tag>
        <Link to={slug}>
          <span>Read more...</span>
        </Link>
      </Footer>
    </Container>
  );
}

export default PostItem;
