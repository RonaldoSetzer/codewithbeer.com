import styled from 'styled-components';
import media from 'styled-media-query';
import { Link as GLink } from 'gatsby';

import Icons from '../Icons/ListIcons';

const { ChevronDown } = Icons;

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: var(--side-background);
  padding-left: 3rem;
  position: fixed;
  height: 100vh;
  color: var(--side-font);

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
  padding-bottom: 1rem;

  p {
    color: var(--side-font-highlight);
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
  color: var(--side-font);
  padding: 0.5rem;
`;

export const Title = styled.h2`
  background-color: var(--side-background-cold);
  color: var(--side-font);
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
  color: var(--side-font-highlight);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-weight: bold;
  }

  span {
    font-size: 12px;
    padding: 0 0.2rem;
  }
`;
