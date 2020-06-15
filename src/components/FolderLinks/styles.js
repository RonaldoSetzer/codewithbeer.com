import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

export const Container = styled.div`
  color: var(--side-font);
  display: flex;
  flex-direction: column;
  width: 100%;

  svg {
    padding: 0.2rem;
    width: 1.1rem;
    height: 1.1rem;
    color: var(--side-icons);
  }
`;

export const Button = styled.a`
  cursor: pointer;
  color: var(--side-font);
  display: flex;
  align-items: center;
  padding: 0.2rem 1rem;
  font-size: 100%;

  &:hover {
    background-color: var(--side-background);
    color: var(--side-font-highlight);
  }
`;

export const Content = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
`;

export const Link = styled(GatsbyLink)`
  display: flex;
  padding: 0.1rem 1.8rem;
  transition: color: 0.5s;
  text-decoration: none;
  align-items: center;

  div {
    border-left:1px solid var(--side-background-cold);
    padding-left: 1rem;
  }
  
  &:visited {
    color: var(--side-font);
  }

  &:hover {
    background-color: var(---side-links-background);
    color: var(--side-font-highlight);
  }
`;
