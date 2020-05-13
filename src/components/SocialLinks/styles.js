import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: var(--background-dark);
  height: 100vh;
  width: 55px;
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li``;

export const Link = styled.a`
  color: var(--icons);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--icons-highlight);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.8rem;
  }
`;
