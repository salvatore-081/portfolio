import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import i18n from "./i18n";

const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #202124;
  --primary-alt-color: #36373a;
  --primary-color-transparent: rgba(32, 33, 36, 0.9);
  --secondary-color: #ffffffe6;
  --secondary-alt-color: #ffffff9f;
  --section-padding: 0 32px;
  --section-padding-desktop: 0 120px 0 200px;
}

::selection {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}

body {
  margin: 0;
  background: var(--primary-color);
  font-family: "Lato", sans-serif;
  color: var(--secondary-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 1.25rem;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 0.5625rem;
  border: 0.375rem solid rgba(0, 0, 0, 0);
  background-color: rgba(232, 234, 237, 0.16);
  background-clip: padding-box;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  font-weight: normal;
}

select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 26px 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  color: var(--secondary-color);
}

select::-ms-expand {
  display: none;
}

option {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}

.fadedown-enter {
  opacity: 0.01;
  transform: translateY(-20px);
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.fadeup-enter {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.fadedown-enter-active,
.fadeup-enter-active {
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.noscroll {
  overflow: hidden;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
