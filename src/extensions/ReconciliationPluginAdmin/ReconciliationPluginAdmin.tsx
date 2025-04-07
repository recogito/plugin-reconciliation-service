import { useState } from 'react';
import { AdminExtensionProps, Plugin } from '@recogito/studio-sdk';
import { 
  EndpointConfig, 
  ReconciliationPluginOpts, 
  ReconciliationPluginInstanceSettings 
} from 'src/types';

export const ReconciliationPluginAdmin = (props: AdminExtensionProps<ReconciliationPluginInstanceSettings>) => {

  const { onChangeUserSettings, settings } = props;

  const plugin = props.plugin as Plugin<ReconciliationPluginOpts>;

  const availableEndpoints = plugin.options?.endpoints || [];

  const [endpoint, setEndpoint] = useState<EndpointConfig | undefined>(settings?.endpoint);

  const onChange = (name: string) => {
    const endpoint = availableEndpoints.find(e => e.name === name);
    setEndpoint(endpoint);

    if (endpoint)
      onChangeUserSettings({ endpoint });
  }

  return (
    <div className="reconciliation-plugin-admin">
      <h3>Select an endpoint</h3>
      <select 
        name="endpoints" 
        id="endpoints"
        value={endpoint?.name}
        onChange={evt => onChange(evt.target.value)}>
        {availableEndpoints.map(endpoint => (
          <option 
            key={endpoint.name}
            value={endpoint.name}>{endpoint.name}</option>
        ))}
      </select>
    </div>
  );

}