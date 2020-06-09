import styled from 'styled-components';
import { Link as GLink } from 'gatsby';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  margin: 2rem 1rem;
  border-top: 1px solid orange;
  border-bottom: 3px solid orange;
  color: orange;
  font-weight: bold;

  svg,
  p {
    padding: 0 0.5rem;
  }
`;

export const Link = styled(GLink)`
  color: orange;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
