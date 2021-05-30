/* eslint react/prop-types: 0 */
import React from 'react';
import kebab from 'lodash';

import { Container, Tag, Footer, Description, Link } from './styles';
import PostTitle from '../PostTitle/PostTitle';

function PostItem({ title, date, description, tags, timeToRead, slug }) {
  return (
    <Container>
      <Link to={slug}>
        <PostTitle date={date} title={title} timeToRead={timeToRead} />
      </Link>
      <Description>
        {description}
        <Link to={slug}>read more.</Link>
      </Description>
      <Footer>
        {tags &&
          tags.map(label => (
            <Tag to={`/tag/${kebab(label.toLowerCase())}`}>{`#${label}`}</Tag>
          ))}
      </Footer>
    </Container>
  );
}

export default PostItem;
