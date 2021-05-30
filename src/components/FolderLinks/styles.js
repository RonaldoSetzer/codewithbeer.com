import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import media from 'styled-media-query';

export const Container = styled.div`
  color: var(--side-menu-foreground);
  display: flex;
  flex-direction: column;
  width: 100%;

  svg {
    padding: 0.2rem;
    width: 1.1rem;
    height: 1.1rem;
    color: var(--primary);
  }
`;

export const Button = styled.a`
  cursor: pointer;
  color: var(--side-menu-foreground);
  display: flex;
  align-items: center;
  padding: 0.2rem 1rem;

  &:hover {
    background-color: var(--side-menu-background);
    color: var(--side-menu-foreground-highlight);
  }

  ${media.lessThan('large')`
    padding: 0.1rem 1rem;
  `}
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
  color: var(--side-menu-foreground);

  div {
    border-left:1px solid var(--side-menu-highlight-background);
    padding-left: 1rem;
  }

  &:visited {
    color: var(--side-menu-foreground);
  }

  &:hover {
    background-color: var(--hover-background);
    color: var(--side-menu-foreground-highlight);
  }

  ${media.lessThan('large')`
    padding: 0 1.8rem;
  `}
`;
