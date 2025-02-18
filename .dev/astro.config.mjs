import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import ReconciliationAutosuggest from '@recogito/plugin-reconciliation-service';

export default defineConfig({
  integrations: [
    react(),
    ReconciliationAutosuggest()
  ],
  devToolbar: {
    enabled: false
  },
  adapter: node({
    mode: 'standalone'
  })
});