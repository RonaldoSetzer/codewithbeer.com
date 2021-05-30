import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-items: flex-start;

  div + div {
    margin-left: 0.5rem;
  }

  ${media.lessThan('large')`
    flex-direction: column;

    div + div {
      margin-top: 0.5rem;
      margin-left: 0;
    }
  `}
`;

export const Button = styled.div`
  background-color: var(--main-background-default);
  color: var(--primary);
  border: 0.1rem solid var(--main-background-colorful);
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;

  svg {
    margin-right: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }

  a {
    display: flex;
    align-items: center;
  }
`;
