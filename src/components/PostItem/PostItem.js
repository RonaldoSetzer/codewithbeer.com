/* eslint react/prop-types: 0 */
import React from 'react';
import { Container, Header, Tag, Footer, Content } from './styles';

function PostItem({ title, date, description, category, timeToRead }) {
  return (
    <Container>
      <Header>
        <time>{date}</time>
        <h1>{title}</h1>
      </Header>
      <Content>
        <p>{description}</p>
        <p>{`${timeToRead} min read`}</p>
      </Content>
      <Footer>
        <Tag>{category}</Tag>
        <span>Read more...</span>
      </Footer>
    </Container>
  );
}

export default PostItem;
