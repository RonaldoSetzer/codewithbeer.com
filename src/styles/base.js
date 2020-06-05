import styled from 'styled-components';
import media from 'styled-media-query';

export const MainContainer = styled.div`
  padding: 1rem;
  color: #ccc;
  ${media.lessThan('large')`
    margin-bottom: 4reml
    width: 100vw;
  `}
`;

export const MainContent = styled.section`
  margin: auto;
  max-width: 60rem;
  padding: 0;

  ${media.lessThan('large')`
    max-width: 100%;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  ul,
  ol,
  iframe {
    color: #ccc;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;

    ${media.lessThan('large')`
      word-break: break-word;
    `}
  }

  p {
    margin: 0 auto 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 1.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    width: auto;
    max-width: 100%;
    margin: 1.875rem auto;
  }

  blockquote {
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }

  hr {
    margin: 3rem auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.8rem;

    ${media.lessThan('large')`
      font-size: 1.875rem;
    `}
  }

  h2 {
    font-size: 2.1rem;

    ${media.lessThan('large')`
      font-size: 1.375rem;
    `}
  }

  h3 {
    font-size: 1.6rem;

    ${media.lessThan('large')`
      font-size: 1.125rem;
    `}
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;

    ${media.lessThan('large')`
      padding: 0;
    `}
  }

  a {
    color: orange;
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
    }

    &:hover {
      background: var(--background-light);
      opacity: 0.8;
    }
  }
  pre {
    ${media.lessThan('large')`
      width: 85vw;
    `}
  }
`;