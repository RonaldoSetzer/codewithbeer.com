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
    background: ${colors.secondaryDark};
    line-height: 1;
    font-family:  Roboto, Helvetica, Arial, sans-serif;
  }

  body.dark {
    --background-default: ${colors.secondaryDark};
    --background-default-darken: ${darken(0.05, colors.secondaryDark)};
    --background-light: ${colors.white};
    --background-menu: ${colors.secondary};
    --background-menu-title: ${colors.secondaryCold};
    --background-colorful: ${colors.primary};

    --font-default: ${colors.gray};
    --font-light: ${colors.white};
    --font-highlight: ${colors.primaryCold};
    --font-colorful: ${colors.primary};

    --social-links: ${colors.secondaryCold};
    --social-links-highlight: ${darken(0.2, colors.primary)};
  }

  body.light {
    --background-default: ${colors.white};
    --background-default-darken: ${darken(0.05, colors.secondaryDark)};
    --background-light: ${colors.white};
    --background-menu: ${colors.secondary};
    --background-menu-title: ${colors.secondaryCold};
    --background-colorful: ${colors.primary};

    --font-default: ${colors.gray};
    --font-light: ${colors.white};
    --font-highlight: ${colors.primaryCold};
    --font-colorful: ${colors.primary};

    --social-links: ${colors.secondaryCold};
    --social-links-highlight: ${darken(0.2, colors.primary)};
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
