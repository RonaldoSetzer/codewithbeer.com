import styled from 'styled-components';
import media from 'styled-media-query';

import Icons from '../Icons/ListIcons';

const { ChevronRight } = Icons;

export const Chevron = styled(ChevronRight)`
  color: var(--main-font-colorful);
  height: 1rem;
  padding-right: 0.5rem;
`;

export const Container = styled.section`
  padding: 1rem;
  ${media.lessThan('large')`
    padding: 0;
    margin-bottom: 4rem;
  `}
`;

export const Content = styled.main`
  background: var(--main-background);
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  width: 60rem;

  ${media.lessThan('large')`
    width: auto;
  `}

  .ais-SearchBox {
    flex-grow: 2;
    background: var(--main-links-background);
  }

  .ais-SearchBox-input {
    width: 100%;
    border: 2px solid var(--main-background-cold);
    background-color: var(--side-background);
    color: var(--main-background-cold);
    font-size: 1.2rem;
    padding: 0.2rem 0.5rem;
    outline: none;
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;

    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }

    &::placeholder {
      color: var(--main-background-cold);
    }

    &:focus {
      border-color: var(--main-background-colorful);
      color: var(--main-font-colorful);
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);

      &::placeholder {
        color: var(--main-font-colorful);
      }
    }
  }

  .ais-Hits-list,
  .ais-Hits,
  .ais-Hits-item {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    display: flex;
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  .ais-Stats {
    padding: 0.2rem 2.5rem 1rem;
    color: var(--main-font-highlight);
  }

  ${media.lessThan('large')`
    .ais-SearchBox-input {
      border: 2px solid var(--main-background-colorful);
      color: var(--main-font-colorful);

      &::placeholder {
        color: var(--main-font-colorful);
      }
    }

    li>div {
      width: 100%; 
    }
  `}
`;

export const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-bottom: 0;
`;
