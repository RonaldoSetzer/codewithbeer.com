import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  background-color: var(--main-background);
  height: auto;
  min-height: 4rem;

  div {
    display: flex;
    color: var(--secondary);
  }

  span {
    padding-left: 0.5rem;
  }

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const Time = styled.time`
  margin: 0px;
  display: flex;
  justify-content: left;

  ${media.lessThan('large')`
    justify-content: flex-start;
  `}
`;
