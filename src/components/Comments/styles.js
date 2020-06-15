import styled from 'styled-components';

export const Container = styled.section`
  margin: auto;
  max-width: 60rem;

  iframe[sr*='ads-iframe'] {
    display: none;
  }

  #disqus_thread {
    a {
      color: var(--main-font-colorful) !important;
    }
  }
`;

export const Title = styled.h2`
  color: var(--main-font-colorful);
  font-size: 2.1rem;
  font-weight: 700;
  margin: 4rem 0 2rem;
  border-bottom: 2px solid var(--main-background-colorful);
`;
