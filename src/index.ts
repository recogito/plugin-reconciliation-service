import type { AstroIntegration } from 'astro';
import { Plugin, registerPlugin } from '@recogito/studio-sdk';
import { ReconciliationPluginOpts } from './types';

export const ReconciliationAutosuggestPlugin: Plugin<ReconciliationPluginOpts> = {

  name: 'Reconciliation Service API',

  description: 'Use a Reconciliation Service API endpoint as a tag source in your projects.',

  author: 'Performant Software',

  homepage: 'https://www.performantsoftware.com/',

  extensions: [{
    name: 'reconciliation-autosuggest',

    module_name: '@recogito/plugin-reconciliation-service',
  
    component_name: 'ReconciliationAutosuggest',
  
    extension_point: 'annotation:*:tag-autosuggest'
  }, {
    name: 'reconciliation-plugin-admin',

    module_name: '@recogito/plugin-reconciliation-service',
  
    component_name: 'ReconciliationPluginAdmin',
  
    extension_point: 'admin'
  }],

  options: {
    endpoints: [{ 
      name: 'Getty Arts and Architecture Thesaurus (AAT)', 
      url: 'https://services.getty.edu/vocab/reconcile',
      type: '/aat'
    },{
      name: 'Getty Thesaurus of Geographic Names (TGN)', 
      url: 'https://services.getty.edu/vocab/reconcile',
      type: '/tgn'
    },{
      name: 'Getty Union List of Artist Names (ULAN)', 
      url: 'https://services.getty.edu/vocab/reconcile',
      type: '/ulan'
    },{
      name: 'Getty (All Vocabularies)', 
      url: 'https://services.getty.edu/vocab/reconcile'
    }]
  }

}

const plugin = (): AstroIntegration  => ({
  name: 'reconciliation-service-plugin',
  hooks: {
    'astro:config:setup': ({ config, logger }) => {
      registerPlugin(ReconciliationAutosuggestPlugin, config, logger);
    }
  }
});

export default plugin;
