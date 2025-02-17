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