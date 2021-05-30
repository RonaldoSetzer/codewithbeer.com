import styled from 'styled-components';
import media from 'styled-media-query';
import { Link as GLink } from 'gatsby';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--primary);
  width: 960px;

  ${media.lessThan('large')`
    margin: 1rem;
    width: auto;
  `}
`;

export const Description = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 2rem;
  letter-spacing: 0.003rem;

  a {
    text-decoration: underline;
  }
`;

export const Tag = styled(GLink)`
  margin-right: 0.2rem;

  transition: opacity 0.5s;

  :hover {
    color: var(--primary);
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Link = styled(GLink)`
  text-decoration: none;
  transition: opacity 0.5s;

  :hover {
    color: var(--primary);
    background: var(--hover-background);
    opacity: 0.8;
  }
`;
