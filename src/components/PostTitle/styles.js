import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
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
