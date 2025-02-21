import type { Extension, Plugin } from '@recogito/studio-sdk';

let registry: Plugin[] = [];

try {
  const mod = await import('./generated/registered.json', { assert: { type: 'json' } });
  registry = mod.default;
} catch {
  // File doesn't exist yet, use empty registry
  registry = [];
}

export const PluginRegistry = {

  listPlugins: (): Plugin[] => {
    return [...registry];
  },

  enumerateExtensions: (): Extension[] => {
    return registry.reduce<Extension[]>((all, plugin) => ([...all, ...plugin.extensions]), []);
  }
  
}