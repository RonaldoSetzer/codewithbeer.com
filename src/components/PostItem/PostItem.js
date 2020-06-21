/* eslint react/prop-types: 0 */
import React from 'react';
import kebab from 'lodash';

import { Container, Tag, Tags, Footer, Content, Link } from './styles';
import PostTitle from '../PostTitle/PostTitle';

function PostItem({ title, date, description, tags, timeToRead, slug }) {
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
        <Tags>
          {tags &&
            tags.map(label => (
              <Tag to={`/tag/${kebab(label.toLowerCase())}`}>{label}</Tag>
            ))}
        </Tags>
        <Link to={slug}>read more...</Link>
      </Footer>
    </Container>
  );
}

export default PostItem;
