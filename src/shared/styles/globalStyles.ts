import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: light dark;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background-color: ${({ theme }) => theme.colors.background.primary};
    text-size-adjust: 100%;
  }

  body {
    min-height: 100vh;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img,
  svg {
    display: block;
  }

  :focus-visible {
    outline: 2px solid
      ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.action.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
  }
`;
