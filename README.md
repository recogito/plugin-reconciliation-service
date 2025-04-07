# Reconciliation Service API Plugin

Use a Reconciliation Service API endpoint as a tag source in Recogito Studio projects.

## Development

- Run `npm install` in the root and the `.dev` folder.
- Run `npm run build` to build the plugin
- Run `npm run dev` to preview the plugin in the test app.

## Installation

Go into your Recogito Client folder. To install the plugin package, run:

```
npm install @recogito/plugin-reconciliation-service
```

Edit your `astro.config.mjs`:

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

Restart the Recogito Client.
