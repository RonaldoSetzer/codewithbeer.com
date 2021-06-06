import styled from 'styled-components';
import media from 'styled-media-query';
import { Link as GLink } from 'gatsby';

import Icons from '../Icons/ListIcons';

const { ChevronDown } = Icons;

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: var(--side-menu-background);
  padding-left: 3rem;
  position: fixed;
  height: 100vh;

  ${media.lessThan('large')`
    padding-top: 5rem;
    width: 100vw;
    padding-left: 0;
    width: 100vw;
    height: 100vh;
    transition: 0.3s ease;
    transform: ${(props) =>
      props.isMenuOpen ? 'translateX(0)' : 'translateX(-100vw)'};
  `};
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1rem;

  p {
    padding: 0rem 2.5rem 0.5rem;
    line-height: 1.25rem;
    text-align: center;
    white-space: pre-wrap;
  }

  svg {
    width: 2rem;
    height: 2rem;
    padding: 1rem;
    display: none;
  }

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const Chevron = styled(ChevronDown)`
  color: var(--side-menu-foreground);
  padding: 0.5rem;
`;

export const Title = styled.h5`
  background-color: var(--side-menu-highlight-background);
  color: var(--side-menu-foreground);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-weight: bold;
  width: 100%;
`;

export const Explore = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Link = styled(GLink)`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-weight: bold;
  }

  span {
    padding: 0 0.2rem;
  }
`;
