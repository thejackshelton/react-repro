import { defineConfig } from "astro/config";
import qwikdev from "@qwikdev/astro";
import { qwikReact } from "@builder.io/qwik-react/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({ include: ["**/react/*"] }),
    qwikdev({ include: ["**/qwik/*"] }),
  ],
  /* To show that React is working outside of the integration */
  vite: {
    plugins: [qwikReact()],
  },
});
