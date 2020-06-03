/* eslint react/prop-types: 0 */
import React from 'react';
import { Container, Tag, Footer, Content, Link } from './styles';
import PostTitle from '../PostTitle/PostTitle';

function PostItem({ title, date, description, category, timeToRead, slug }) {
  return (
    <Container>
      <Link to={slug}>
        <PostTitle date={date} title={title} />
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
