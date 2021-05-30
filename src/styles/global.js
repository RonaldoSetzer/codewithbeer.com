import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, main {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.2rem;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }

  body {
    line-height: 1;
    font-family: 'Inconsolata', 'Baloo 2', Helvetica, Arial, sans-serif;
  }

  body.dark {
    --color1: #fabd2f;
    --color2: #fe8019;
    --color3: #b8bb26;
    --color4: #8ec07c;
    --color5: #83a598;
    --color6: #665642;

    --dark1: #1e2021;
    --dark2: #282828;
    --dark3: #3c3836;
    --dark4: #100c07

    --light0: #ffffff;
    --light1: #ebdbb2;

    // texts
    --emphasis: var(--color5);
    --links: var(--color2);
    --heading1: var(--color1);
    --heading2: var(--color2);
    --heading3: var(--color3);
    --heading4: var(--color4);
    --heading5: var(--color5);
    --foreground: var(--light1);
    --side-menu-foreground: var(--light0);
    --side-menu-foreground-highlight: var(--color1);
    --links-foreground: var(--color2);
    --links-hover-foreground: var(--color1);

    // backgrounds
    --main-background: var(--dark2);
    --side-menu-background: var(--dark1);
    --side-menu-highlight-background: var(--color6);
    --hover-background: var(--dark4);
    --social-background: var(--dark3);
    --code-background: var(--dark1);

    // Main
    --primary: var(--color1);
    --secondary: var(--color5);

    // Social
    --social-links: var(--light1);
    --social-links-highlight: var(--color1);

    background: var(--main-background);
    color: var(--foreground);
    font-size: 1.2rem;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
    letter-spacing: 0.069rem;
  }

  h1 {
    font-size: 2rem;
    color: var(--heading1);

    ${media.lessThan('large')`
      font-size: 1.875rem;
    `}
  }

  h2 {
    font-size: 1.8rem;
    color: var(--heading2);

    ${media.lessThan('large')`
      font-size: 1.375rem;
    `}
  }

  h3 {
    font-size: 1.6rem;
    color: var(--heading3);

    ${media.lessThan('large')`
      font-size: 1.125rem;
    `}
  }

  h4 {
    font-size: 1.4rem;
    color: var(--heading4);
  }

  h5 {
    font-size: 1.2rem;
    color: var(--heading5);
  }

  strong {
    font-weight: 700;
    color: var(--emphasis);
  }

  a {
    color: var(--links-foreground);
  }

  a:hover {
    color: var(--links-hover-foreground);
  }
`;

export default GlobalStyles;
