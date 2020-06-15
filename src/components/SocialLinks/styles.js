import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

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

  ${media.lessThan('large')`
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
  `};
`;

export const ListItem = styled.li``;

export const Separator = styled.div`
  border-bottom: 2px solid var(--side-background);
  width: 70%;

  ${media.lessThan('large')`
    border-right: 2px solid var(--side-background);
    border-bottom: none;
    height: 50%;
    width:0;
  `};
`;

const link = css`
  color: var(--social-links);
  text-decoration: none;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.8rem;
  }

  ${media.greaterThan('large')`
    transition: color 0.5s;

    svg:hover {
      color: var(--social-links-highlight);
    }
  `}
`;

export const ALink = styled.a`
  ${link}
`;

export const GLink = styled(Link)`
  ${link}
`;
