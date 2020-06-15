import styled from 'styled-components';
import { Link as GLink } from 'gatsby';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  margin: 2rem 1rem;
  border-top: 1px solid var(--main-background-colorful);
  border-bottom: 3px solid var(--main-background-colorful);
  color: var(--main-links);
  font-weight: bold;

  svg,
  p {
    padding: 0 0.5rem;
  }
`;

export const Link = styled(GLink)`
  color: var(--main-links);
  text-decoration: none;
  display: flex;
  align-items: center;
`;
