import { describe, expect, it } from "vitest";
import { render } from "./entry-server";
import itTranslation from "./locales/it/translation.json";
import enTranslation from "./locales/en/translation.json";

// Struttura delle chiavi (con lunghezza degli array) per confrontare le due lingue
function shape(value) {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === "object")
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v)]));
  return typeof value;
}

describe("contenuti", () => {
  it("le traduzioni IT ed EN hanno la stessa struttura", () => {
    expect(shape(enTranslation)).toEqual(shape(itTranslation));
  });

  it.each(["it", "en"])("la pagina %s presenta il ruolo e i metadati", (lng) => {
    const { html, head } = render(lng);
    expect(html).toContain("Engineering Manager");
    expect(head).toContain("Technical Lead · Engineering Manager");
    expect(head).toContain(`hreflang="${lng}"`);
    expect(head).toContain("og:image");
  });

  it("non contiene frasi escluse dal posizionamento", () => {
    const text = JSON.stringify([itTranslation, enTranslation]).toLowerCase();
    expect(text).not.toContain("non scrivo codice a mano");
    expect(text).not.toContain("sviluppatore full stack");
  });
});
