import styled from 'styled-components';
import media from 'styled-media-query';
import { Link as GLink } from 'gatsby';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 0.1rem solid var(--background-light);
  background-color: var(--background-darkest);
  width: 100vw;
  color: #ccc;
  z-index: 1200;
  position: fixed;

  h1 {
    font-size: 18px;
    font-weight: bold;
  }

  svg {
    width: 2rem;
    height: 2rem;
    padding: 1rem;
  }

  ${media.greaterThan('large')`
    display: none;
  `};
`;

export const Link = styled(GLink)`
  color: #ccc;
  text-decoration: none;
  display: flex;
  font-size: 12px;

  span {
    font-size: 12px;
    padding: 0 0.2rem;
  }
`;
