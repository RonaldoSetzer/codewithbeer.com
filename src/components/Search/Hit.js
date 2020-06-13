/* eslint react/prop-types: 0 */
import React from 'react';

import PostItem from '../PostItem';

function Hit({ hit }) {
  const {
    fields: { slug },
    title,
    date,
    description,
    tags,
  } = hit;
  return (
    <PostItem
      key={slug}
      slug={slug}
      title={title}
      date={date}
      description={description}
      tags={tags}
    />
  );
}

export default Hit;
