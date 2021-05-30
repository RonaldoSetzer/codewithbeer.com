import styled from 'styled-components';
import media from 'styled-media-query';

export const MainContainer = styled.div`
  padding: 1rem;

  ${media.lessThan('large')`
    margin-bottom: 4rem;
  `}
`;

export const Line = styled.hr`
  height: 0;
  border: 1px solid var(--main-background-colorful);
`;

export const MainContent = styled.section`
  margin: auto;
  max-width: 60rem;
  padding: 0;

  ${media.lessThan('large')`
    max-width: 100%;
  `}

  p,
  ul,
  ol,
  iframe {
    font-weight: 300;
    line-height: 2rem;
    letter-spacing: 0.003rem;

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
      border: 1px solid #fff;
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
    font-style: italic;
    border-left: 0.5rem solid var(--primary);
    background-color: var(--code-background);
  }

  hr {
    margin: 3rem auto;
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
    transition: opacity 0.5s;

    :hover {
      color: var(--side-menu-foreground-highlight);
      background: var(--hover-background);
      opacity: 0.8;
    }
  }

  pre {
    ${media.lessThan('large')`
      width: 85vw;
    `}
  }
`;
