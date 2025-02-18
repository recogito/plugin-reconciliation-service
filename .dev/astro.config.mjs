import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import ReconciliationAutosuggest from 'reconciliation-service-plugin';

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