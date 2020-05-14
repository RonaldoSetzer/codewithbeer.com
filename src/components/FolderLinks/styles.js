import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

export const Container = styled.div`
  color: #ccc;
  display: flex;
  flex-direction: column;
  width: 100%;

  svg {
    padding: 0.2rem;
    width: 1.1rem;
    height: 1.1rem;
    color: orange;
  }

  h1 {
    display: flex;
    align-items: center;
    padding: 0.2rem 1rem;
  }
`;

export const Link = styled(GatsbyLink)`
  display: flex;
  padding: 0.1rem 1.8rem;
  transition: color: 0.5s;
  text-decoration: none;
  color: #ccc;
  align-items: center;

  div {
    border-left:1px solid #888;
    padding-left: 1rem;
  }
  
  &:visited {
    color: #ccc;
  }

  &:hover {
    background-color: var(--links-highlight);
  }
`;
