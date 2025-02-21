import { AdminExtensionExtensionProps, Plugin } from '@recogito/studio-sdk';
import { ReconciliationPluginOpts } from 'src/types';

export const ReconciliationPluginAdmin = (props: AdminExtensionExtensionProps) => {

  const { onChangeUserSettings, settings } = props;

  const plugin = props.plugin as Plugin<ReconciliationPluginOpts>;

  const endpoints = plugin.options?.endpoints || [];

  // TODO needs to show the currently configured endpoint

  // TODO when the selection changes, change the user settings via the 
  // onChangeUserSettings callback

  // Note that `settings` will always be undefined in the test app!

  return (
    <div className="reconciliation-plugin-admin">
      <h3>Select an endpoint</h3>
      <select name="cars" id="cars">
        {endpoints.map(endpoint => (
          <option 
            key={endpoint.name}
            value={endpoint.name}>{endpoint.name}</option>
        ))}
      </select>
    </div>
  );

}