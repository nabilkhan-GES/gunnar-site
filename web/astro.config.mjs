import { defineConfig } from 'astro/config';

// Host-agnostic static output → ./dist, deployable to any static host.
//
// `site` and `base` are read from the environment so the GitHub Pages workflow
// can inject the correct values (the repo sub-path) at build time. Locally and
// on root-domain hosts they default to the production domain at base "/".
export default defineConfig({
  site: process.env.SITE || 'https://www.gunnarenergyservices.com',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  build: {
    format: 'directory', // clean URLs: /services/relief-wells/
  },
});
