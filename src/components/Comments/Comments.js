import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import { Container, Title } from './styles';

function Comments({ url, title }) {
  const completeURL = `https://codewithbeer.com${url}`;
  return (
    <Container>
      <Title># Comments</Title>

      <ReactDisqusComments
        shortname="codewithbeer"
        title={title}
        identifier={completeURL}
        url={completeURL}
      />
    </Container>
  );
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Comments;
