import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { createI18n, languageFromPath } from "./i18n";

const i18n = createI18n(languageFromPath(window.location.pathname));
const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App i18n={i18n} />
  </StrictMode>
);

// In sviluppo la pagina non è prerenderizzata: si monta da zero
if (root.firstElementChild) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
