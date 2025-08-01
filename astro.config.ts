import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://pianyijichang.uk/",
  integrations: [tailwind(), sitemap(), mdx({
    syntaxHighlight: "shiki"
  })],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    }
  }
});
