import React from 'react';
import PropTypes from 'prop-types';

import { Container, Link } from './styles';
import Icons from '../Icons/ListIcons';

function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;
  const { ArrowDoubleLeft, ArrowDoubleRight } = Icons;

  return (
    <Container>
      {!isFirst && (
        <Link to={prevPage}>
          <ArrowDoubleLeft />
          prev
        </Link>
      )}
      <p>{`${currentPage} / ${numPages}`}</p>
      {!isLast && (
        <Link to={nextPage}>
          next
          <ArrowDoubleRight />
        </Link>
      )}
    </Container>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
};

export default Pagination;
