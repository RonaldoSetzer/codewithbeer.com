import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export const colors = {
  primaryCold: '#ffefce',
  primary: '#e79d02',
  secondary: '#342716',
  secondaryCold: '#665642',
  secondaryDark: darken(0.05, '#342716'),
  white: '#fff',
  gray: '#ccc',
};

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
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }

  body {
    line-height: 1;
    font-family:  Roboto, Helvetica, Arial, sans-serif;
  }

  body.dark {
    // Main
    --main-background: #221a0e;
    --main-background-colorful: #e79d02;
    --main-background-cold: #665642;
    --main-background-light: #fff;
    --main-font: #ccc;
    --main-font-light: #fff;
    --main-font-highlight: #ffefce;
    --main-font-colorful: #e79d02;
    --main-links: #e79d02;
    --main-links-background: #100c07;

    // Side
    --side-background: #342716;
    --side-background-cold: #665642;
    --side-links-background: #100c07;
    --side-icons: #e79d02;
    --side-font: #fff;
    --side-font-highlight: #ffefce;
    
    // Social
    --social-background: #100c07;
    --social-links: #665642;
    --social-links-highlight: #825801;
    --social-font-highlight: #ffefce;
    --social-font-colorful: #e79d02;

    background: var(--main-background);
  }

  body.light {
    --main-background: #221a0e;
    --main-background-colorful: #e79d02;
    --main-background-cold: #665642;
    --main-background-light: #fff;
    --main-font: #ccc;
    --main-font-light: #fff;
    --main-font-highlight: #ffefce;
    --main-font-colorful: #e79d02;
    --main-links: #e79d02;
    --main-links-background: #100c07;

    // Side
    --side-background: #342716;
    --side-background-cold: #665642;
    --side-links-background: #100c07;
    --side-icons: #e79d02;
    --side-font: #fff;
    --side-font-highlight: #ffefce;
    
    // Social
    --social-background: #100c07;
    --social-links: #665642;
    --social-links-highlight: #825801;
    --social-font-highlight: #ffefce;
    --social-font-colorful: #e79d02;

    background: var(--main-background);
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
`;

export default GlobalStyles;
