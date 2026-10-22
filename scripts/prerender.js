// Genera le pagine statiche IT (/) ed EN (/en/) a partire dalla build client e da quella SSR
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const ssr = path.resolve("dist-ssr");
const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
const { render } = await import(pathToFileURL(path.join(ssr, "entry-server.js")).href);

for (const [lng, dir] of [
  ["it", dist],
  ["en", path.join(dist, "en")],
]) {
  const { html, head, styles } = render(lng);
  const page = template
    .replace('<html lang="it">', `<html lang="${lng}">`)
    .replace("<!--app-head-->", () => head)
    .replace("<!--app-styles-->", () => styles)
    .replace("<!--app-html-->", () => html);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, "index.html"), page);
  console.log(`prerender: ${path.relative(process.cwd(), path.join(dir, "index.html"))}`);
}

await fs.rm(ssr, { recursive: true, force: true });
