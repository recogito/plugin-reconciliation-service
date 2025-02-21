import type { AstroIntegration } from 'astro';
import { Extension, registerExtensions} from '@recogito/studio-sdk';

export const ReconciliationAutosuggestExtension: Extension = {

  name: 'reconciliation-autosuggest',

  module_name: '@recogito/plugin-reconciliation-service',

  component_name: 'ReconciliationAutosuggest',

  extension_point: 'annotation.*.tag-autosuggest'

}

const plugin = (): AstroIntegration  => ({
  name: 'reconciliation-service-plugin',
  hooks: {
    'astro:config:setup': ({ config, logger }) => {
      registerExtensions(ReconciliationAutosuggestExtension, config, logger);
    }
  }
});

export default plugin;
