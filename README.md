## Cos'è

Sito personale [salvatoreemilio.it](https://salvatoreemilio.it): React 19 + Vite, testi in italiano e in inglese in [`src/locales/`](./src/locales/).

La build genera due pagine statiche già renderizzate, `/` (italiano) e `/en/` (inglese), con meta tag, Open Graph e `hreflang` propri.

## Come si avvia

- Sviluppo: `npm install && npm run dev`
- Build e prerender: `npm run build` (output in `dist/`), anteprima con `npm run preview`
- Test: `npm test`
- Produzione: `docker compose build --pull && docker compose up -d` (nginx sulla porta 17000, dietro Traefik)

## Crediti

[Brittany Chiang](https://brittanychiang.com) per l'ispirazione della prima versione.
