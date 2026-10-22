import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Anno del footer fissato alla build, così prerender e client coincidono
  define: { __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()) },
  // styled-components è CommonJS: va incluso nel bundle SSR usato dal prerender
  ssr: { noExternal: ["styled-components"] },
  test: {
    environment: "jsdom",
  },
});
