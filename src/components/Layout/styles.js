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
  background: var(--background-dark);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;

  ${media.lessThan('large')`
    padding: 0 0 3rem 0;
  `}
`;
