import styled from 'styled-components';
import media from 'styled-media-query';
import { Link as GLink } from 'gatsby';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--side-menu-highlight-background);
  background-color: var(--social-background);
  width: 100vw;
  z-index: 1200;
  position: fixed;

  svg {
    width: 2rem;
    height: 2rem;
    padding: 1rem;
    color: var(--social-links);
  }

  svg:active {
    width: 1.8rem;
    height: 1.8rem;
    padding: 1.1rem;
    color: var(--social-links-highlight);
  }

  ${media.greaterThan('large')`
    display: none;
  `};

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const Link = styled(GLink)`
  color: var(--social-font-highlight);
  text-decoration: none;
  display: flex;
  font-size: 0.9rem;
  text-align: center;

  span {
    padding: 0 0.2rem;
  }
`;
