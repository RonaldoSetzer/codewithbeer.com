import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.nav`
  display: flex;
  background-color: var(--background-dark);
  position: fixed;
  height: 100vh;
  z-index: 1200;

  ${media.lessThan('large')`
    width: 100vw;
    height: auto;
    bottom: 0;
  `};
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
  `};
`;

export const ListItem = styled.li``;

export const Link = styled.a`
  color: var(--icons);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--icons-highlight);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.8rem;
  }
`;
