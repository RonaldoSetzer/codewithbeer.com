import styled from 'styled-components';
import media from 'styled-media-query';
import { Link as GLink } from 'gatsby';

export const Container = styled.div`
  color: var(--main-font);
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--main-background-colorful);
  width: 960px;

  ${media.lessThan('large')`
    margin: 1rem;
    width: auto;
  `}
`;

export const Content = styled.div`
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: 0.003rem;

  p {
    padding: 0.5rem 0 1.5rem;
  }

  span {
    color: var(--main-font-highlight);
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

export const Tag = styled(GLink)`
  background-color: var(--main-background-cold);
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 0.2rem;
  font-size: 1rem;
  color: var(--main-font-light);
  border: 0;
  border-radius: 5px;

  transition: opacity 0.5s;

  :hover {
    background: var(--main-links);
  }

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
  color: var(--main-links);
  font-weight: bold;

  transition: opacity 0.5s;

  :hover {
    color: var(--main-font-highlight);
    background: var(--main-links-background);
    opacity: 0.8;
  }

  ${media.lessThan('large')`
    font-size: .8rem;
  `}
`;
