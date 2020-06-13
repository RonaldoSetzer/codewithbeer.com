/* eslint react/prop-types: 0 */
import React from 'react';
import { Container, Tag, Tags, Footer, Content, Link } from './styles';
import PostTitle from '../PostTitle/PostTitle';

function PostItem({ title, date, description, category, timeToRead, slug }) {
  return (
    <Container>
      <Link to={slug}>
        <PostTitle date={date} title={title} />
      </Link>
      <Content>
        <p>{description}</p>
        {timeToRead && <span>{`${timeToRead} min read`}</span>}
      </Content>
      <Footer>
        <Tags>{category && category.map(label => <Tag>{label}</Tag>)}</Tags>
        <Link to={slug}>read more...</Link>
      </Footer>
    </Container>
  );
}

export default PostItem;
