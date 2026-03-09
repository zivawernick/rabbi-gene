// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx"; // Import mdx
import remarkGfm from "remark-gfm";

import { template } from "./src/settings";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Add mdx()
  integrations: [
    react(),
    sitemap(),
    mdx({
      remarkPlugins: [remarkGfm], // Add this
    }),
  ],
  site: template.website_url,
  base: template.base,
  vite: {
    plugins: [tailwindcss()],
  },
});
