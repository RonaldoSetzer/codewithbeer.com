import styled from 'styled-components';
import media from 'styled-media-query';
import { Link as GLink } from 'gatsby';

export const Container = styled.div`
  color: var(--font-default);
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--background-colorful);
  width: 960px;

  ${media.lessThan('large')`
    margin: 1rem;
    width: auto;
  `}
`;

export const Content = styled.div`
  line-height: 1.2rem;

  p {
    padding: 0.5rem 0 1.5rem;
  }

  span {
    color: var(--font-highlight);
  }

  ${media.lessThan('large')`
    span {
      font-size: 0.8rem;
    }
  `}
`;

export const Tags = styled.div`
  display: flex;
`;

export const Tag = styled.div`
  background-color: var(--background-menu-title);
  padding: 0.5rem;
  margin-right: 0.2rem;
  font-size: 1rem;
  color: var(--font-light);
  border: 0;
  border-radius: 5px;

  ${media.lessThan('large')`
    padding: 0.3rem;
    font-size: .8rem;
  `}
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Link = styled(GLink)`
  text-decoration: none;
  color: var(--font-colorful);
  font-weight: bold;

  transition: opacity 0.5s;

  :hover {
    color: var(--font-highlight);
    background: var(--background-default-darken);
    opacity: 0.8;
  }

  ${media.lessThan('large')`
    font-size: .8rem;
  `}
`;
