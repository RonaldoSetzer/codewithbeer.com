/* eslint react/prop-types: 0 */
import React from 'react';

import PostItem from '../PostItem';

function Hit({ hit }) {
  const {
    fields: { slug },
    title,
    date,
    description,
    category,
  } = hit;
  return (
    <PostItem
      key={slug}
      slug={slug}
      title={title}
      date={date}
      description={description}
      category={category}
    />
  );
}

export default Hit;
