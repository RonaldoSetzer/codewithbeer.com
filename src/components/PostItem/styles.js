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

export const Header = styled.div`
  background-color: orange;
  color: #fff;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  height: auto;
  min-height: 5rem;
  font-weight: bold;

  h1 {
    padding: 0 0 0 1rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
  }

  ${media.lessThan('large')`
    flex-direction: column;
    min-height: 9rem;
    
    h1 {
      padding: 1rem;
    }
  `}
`;

export const Time = styled.time`
  background-color: #fff;
  text-transform: uppercase;
  margin: 0px;
  color: orange;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 4rem;
  }

  p {
    padding-left: 0.4rem;
  }

  ${media.lessThan('large')`
    margin: 1rem auto 0 0;
    justify-content: flex-start;

    span {
      font-size: 1rem;
    }

    div {
      display: flex;
    }
  `}
`;

export const Tag = styled.div`
  background-color: orange;
  padding: 0.5rem;
  color: #ccc;
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
