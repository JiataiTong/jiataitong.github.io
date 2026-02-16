import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://jiataitong.github.io",

  i18n:{
    locales:["en", "zh"],
    defaultLocale: "en",
    routing:{
      prefixDefaultLocale: true
    }
  },

  integrations: [mdx(), sitemap(), tailwind()],
});
