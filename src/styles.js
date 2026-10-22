import { createGlobalStyle } from "styled-components";

export const device = {
  tablet: "(min-width: 720px)",
  desktop: "(min-width: 1024px)",
};

const light = `
  --bg: #f7f4ee;
  --surface: #fffdf9;
  --text: #1c1b19;
  --muted: #5e5a53;
  --line: #e2ddd2;
  --line-strong: #b9b2a4;
  --accent: #c8102e;
  --accent-contrast: #ffffff;
  --header-bg: rgba(247, 244, 238, 0.85);
  color-scheme: light;
`;

const dark = `
  --bg: #161514;
  --surface: #1f1e1c;
  --text: #eeebe5;
  --muted: #a8a399;
  --line: #34312d;
  --line-strong: #5f5a53;
  --accent: #ff5a5f;
  --accent-contrast: #161514;
  --header-bg: rgba(22, 21, 20, 0.85);
  color-scheme: dark;
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    ${light}
    --font-display: "Fraunces Variable", Georgia, "Times New Roman", serif;
    --font-body: "Inter Variable", system-ui, -apple-system, "Segoe UI", sans-serif;
    --gutter: 16px;
    --max-width: 1120px;
    --header-height: 64px;
    -webkit-tap-highlight-color: transparent;
  }

  @media ${device.tablet} {
    :root {
      --gutter: 32px;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      ${dark}
    }
  }

  :root[data-theme="dark"] {
    ${dark}
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--header-height) + 16px);
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 17px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, p, ul, ol, figure {
    margin: 0;
  }

  h1, h2, h3 {
    font-family: var(--font-display);
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 1.1;
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }

  a {
    color: inherit;
  }

  ::selection {
    background: var(--accent);
    color: var(--accent-contrast);
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* Comparsa progressiva delle sezioni: solo con JS attivo e senza riduzione del movimento.
     Se l'observer non parte (JS lento o in errore) gli elementi compaiono comunque dopo 2 s */
  @media (prefers-reduced-motion: no-preference) {
    html.js [data-reveal] {
      opacity: 0;
      transform: translateY(16px);
      animation: reveal 0.6s ease 2s forwards;
    }
    html.js [data-reveal].is-visible {
      animation: none;
      opacity: 1;
      transform: none;
      transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
    }
    @keyframes reveal {
      to {
        opacity: 1;
        transform: none;
      }
    }
  }
`;
