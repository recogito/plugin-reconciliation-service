# Reconciliation Service API Plugin

Use a Reconciliation Service API endpoint as a tag source in Recogito Studio projects.
Currently has three endpoint pre-sets configured from which the user can choose:

- Getty Arts and Architecture Thesaurus (AAT)
- Getty Thesaurus of Geographic Names (TGN)
- Getty Union List of Artist Names (ULAN)
- Getty (All Vocabularies)

## Installation

**1. Change into your Recogito Client folder.** To install the plugin package, run:

```
npm install @recogito/plugin-reconciliation-service
```

**2. Edit your `astro.config.mjs`:**

```diff
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

+ import ReconcilationPlugin from '@recogito/plugin-reconciliation-service';

export default defineConfig({
  integrations: [
    react(),
+    ReconcilationPlugin()
  ],
  output: 'server',
  adapter: netlify(),
  vite: {
    ssr: {
      noExternal: ['clsx', '@phosphor-icons/*', '@radix-ui/*']
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext'
      }
    }
  }
});
```

**3. Restart the Recogito Client.**

## Development

- Run `npm install` in the root and the `.dev` folder.
- Run `npm run build` to build the plugin
- Run `npm run dev` to preview the plugin in the test app.
