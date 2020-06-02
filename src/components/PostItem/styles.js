import styled from 'styled-components';

export const Container = styled.div`
  color: #ccc;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid orange;

  p {
    padding: 0.5rem 0;
  }
`;

export const Content = styled.div`
  line-height: 1.2rem;
`;

export const Header = styled.div`
  background-color: orange;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  height: auto;
  min-height: 9rem;
  font-weight: bold;

  h1 {
    padding: 1rem;
    font-size: 2rem;
  }

  time {
    background-color: #fff;
    text-transform: uppercase;
    max-width: 10rem;
    color: orange;
    margin-top: 1rem;
    padding: 0.5rem;
  }
`;

export const Tag = styled.div`
  background-color: orange;
  padding: 0.2rem;
  color: #ccc;
`;

export const Footer = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: orange;
  }
`;
