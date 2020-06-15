import styled from 'styled-components';
import media from 'styled-media-query';
import { Link as GLink } from 'gatsby';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--side-background-cold);
  background-color: var(--social-background);
  width: 100vw;
  z-index: 1200;
  position: fixed;

  h1 {
    font-size: 18px;
    font-weight: bold;
    color: var(--social-font-colorful);
  }

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
`;

export const Link = styled(GLink)`
  color: var(--social-font-highlight);
  text-decoration: none;
  display: flex;
  font-size: 12px;

  span {
    font-size: 12px;
    padding: 0 0.2rem;
  }
`;
