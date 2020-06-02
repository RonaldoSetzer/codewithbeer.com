/* eslint react/prop-types: 0 */
import React from 'react';
import { Container, Header, Tag, Footer, Content, Link } from './styles';

function PostItem({ title, date, description, category, timeToRead, slug }) {
  return (
    <Link to={slug}>
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
    </Link>
  );
}

export default PostItem;
