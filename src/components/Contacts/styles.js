import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-items: flex-start;
`;

export const Button = styled.div`
  background-color: var(--main-background-default);
  color: var(--main-font-colorful);
  border: 0.1rem solid var(--main-background-colorful);
  border-radius: 5px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-right: 1rem;

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
