import styled from 'styled-components';
import media from 'styled-media-query';
import { Link as GLink } from 'gatsby';

import Icons from '../Icons/ListIcons';

const { ChevronDown } = Icons;

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: var(--background);
  color: #ccc;
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
    transform: ${props =>
      props.isMenuOpen ? 'translateX(0)' : 'translateX(-100vw)'};
  `};
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    display: none;
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
  color: #ccc;
  padding: 0.5rem;
`;

export const Title = styled.h2`
  background-color: var(--background-light);
  color: #ccc;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-weight: bold;
  width: 100%;
  font-size: 14px;
`;

export const Explore = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Link = styled(GLink)`
  color: #ccc;
  text-decoration: none;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  span {
    font-size: 12px;
    padding: 0 0.2rem;
  }

  &:hover {
    background-color: var(--links-highlight);
  }

  ${media.lessThan('large')`
    flex-direction: row;
    font-size: 12px;
  `}
`;
