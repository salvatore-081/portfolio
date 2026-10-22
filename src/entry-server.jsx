import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import App from "./App";
import { createI18n, languagePath, languages, SITE_URL } from "./i18n";

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function head(i18n, lng) {
  const t = i18n.t;
  const url = SITE_URL + languagePath[lng];
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t("hero.name"),
    jobTitle: t("hero.role"),
    description: t("meta.description"),
    url,
    image: `${SITE_URL}/og-image.png`,
    worksFor: { "@type": "Organization", name: "Dilaxia", url: "https://www.dilaxia.com/" },
    sameAs: [t("links.linkedin"), t("links.github")],
  };
  return [
    `<title>${escape(t("meta.title"))}</title>`,
    `<meta name="description" content="${escape(t("meta.description"))}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...languages.map(
      (l) => `<link rel="alternate" hreflang="${l}" href="${SITE_URL}${languagePath[l]}" />`
    ),
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:title" content="${escape(t("meta.title"))}" />`,
    `<meta property="og:description" content="${escape(t("meta.description"))}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE_URL}/og-image.png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="${t("meta.locale")}" />`,
    `<meta property="og:locale:alternate" content="${lng === "it" ? "en_US" : "it_IT"}" />`,
    `<meta property="og:site_name" content="Salvatore Emilio" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${JSON.stringify(person).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
}

export function render(lng) {
  const i18n = createI18n(lng);
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToString(sheet.collectStyles(<App i18n={i18n} />));
    return { html, head: head(i18n, lng), styles: sheet.getStyleTags() };
  } finally {
    sheet.seal();
  }
}
