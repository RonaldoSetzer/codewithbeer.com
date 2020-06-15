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
  color: var(--side-font);
  padding: 0.5rem;
`;

export const Title = styled.h2`
  background-color: var(--side-background-cold);
  color: var(--main-font);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-weight: bold;
  width: 100%;
  font-size: 14px;
`;

export const Config = styled.div`
  margin-top: auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.lessThan('large')`
    margin-top: 0;
  `}
`;

export const ConfigItem = styled.div`
  width: 90%;
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Explore = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Link = styled(GLink)`
  color: var(--font-highlight);
  text-decoration: none;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 12px;
    padding: 0 0.2rem;
  }
`;
