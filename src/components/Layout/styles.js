import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;

  ${media.lessThan('large')`
    flex-direction: column;
    padding: 0 0 3rem 0;
  `}
`;

export const Main = styled.main`
  min-height: 100vh;
  margin-left: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${media.lessThan('large')`
    margin: 6rem 0;
  `}
`;
