import styled from 'styled-components';
import { Link as GLink } from 'gatsby';

import Icons from '../Icons/ListIcons';

const { ChevronDown } = Icons;

export const Chevron = styled(ChevronDown)`
  color: #ccc;
  padding: 0.5rem;
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
  }

  &:hover {
    background-color: var(--links-highlight);
  }
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

export const Container = styled.aside`
  display: flex;
  width: 300px;
  height: 100vh;
  background-color: var(--background);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
