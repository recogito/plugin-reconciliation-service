export interface ReconciliationPluginInstanceSettings {

  endpoint: EndpointConfig;

}

export interface ReconciliationResult {

  id: string;

  match: boolean;

  name: string;

  score: number;

  type: ReconciliationResultType[];

}

interface ReconciliationResultType {

  id: string;

  name: string;

}

export interface ReconciliationPluginOpts {

  endpoints: EndpointConfig[];

}

export interface EndpointConfig {

  name: string;

  url: string;

  type?: string;

}