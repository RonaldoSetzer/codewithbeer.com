import styled from 'styled-components';
import media from 'styled-media-query';
import { Link as GLink } from 'gatsby';

export const Container = styled.div`
  color: #ccc;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid orange;
  width: 960px;

  ${media.lessThan('large')`
    margin: 1rem;
    width: auto;
  `}
`;

export const Content = styled.div`
  line-height: 1.2rem;

  p {
    padding: 0.5rem 0;
  }
`;

export const Tags = styled.div`
  display: flex;
`;

export const Tag = styled.div`
  background-color: orange;
  padding: 0.5rem;
  margin-right: 0.2rem;
  font-size: 1rem;
  color: #fff;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: orange;
    font-weight: bold;
  }
`;

export const Link = styled(GLink)`
  text-decoration: none;
`;
