import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.nav`
  display: flex;
  background-color: var(--social-background);
  position: fixed;
  height: 100vh;
  z-index: 1200;

  ${media.lessThan('large')`
    width: 100vw;
    height: auto;
    bottom: 0;
    background-color: var(--social-background);
  `};
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  color: var(--social-links);

  svg {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.6rem 0.8rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--social-links);
  }

  ${media.greaterThan('large')`
    transition: color 0.5s;

    svg:hover {
      color: var(--social-links-highlight);
    }
  `}

  ${media.lessThan('large')`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 3.5rem;

    svg {
      padding: 0.5rem;
    }
  `};
`;

export const Separator = styled.div`
  border-bottom: 5px solid var(--side-menu-background);
  width: 70%;

  ${media.lessThan('large')`
    border-right: 2px solid var(--side-menu-background);
    border-bottom: none;
    height: 50%;
    width:0;
  `};
`;

export const ListItem = styled.li``;
