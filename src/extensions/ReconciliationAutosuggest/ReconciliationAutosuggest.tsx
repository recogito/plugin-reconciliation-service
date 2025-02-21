import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import * as Popover from '@radix-ui/react-popover';
import { VocabularyTerm } from '@recogito/studio-sdk';
import { AutosizeInput } from '@recogito/studio-sdk/components';
import { ReconciliationResult } from 'src/types';

import './ReconciliationAutosuggest.css';

interface AutosuggestProps {
  
  autoFocus?: boolean;

  autoSize?: boolean;

  openOnFocus?: boolean;

  placeholder?: string;

  value?: VocabularyTerm;

  vocabulary?: VocabularyTerm[];

  onChange(value: VocabularyTerm): void;

  onSubmit(value: VocabularyTerm): void;

  onCancel?(): void;

}

export const ReconciliationAutosuggest = (props: AutosuggestProps) => {

  const [query, setQuery] = useState('');

  const [debounced] = useDebounce(query, 350);

  const [busy, setBusy] = useState(false);

  const [failed, setFailed] = useState(false);

  const [results, setResults] = useState<ReconciliationResult[]>([]);

  const reset = useCallback(() => {
    setResults([]);
    setBusy(false);
    setFailed(false);
  }, []);

  useEffect(() => {
    if (!debounced.trim()) {
      reset();
      return;
    }

    setBusy(true);

    const formData = new FormData();
    formData.append('queries', JSON.stringify({ q0: { query: debounced.trim(), type: '/aat' }}));

    fetch('https://services.getty.edu/vocab/reconcile', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      setResults(data.q0.result);
      setBusy(false);
      setFailed(false);
    })
    .catch(error => {
      console.error(error);
      reset();
    });
  }, [debounced, reset]);

  const onSelect = useCallback((result: ReconciliationResult) => () => {
    props.onSubmit({
      label: result.name,
      id: result.id
    });

    setQuery('');
    reset();
  }, [reset]);

  return (
    <div className="reconciliation-autosuggest">
      <Popover.Root 
        open={results.length > 0}>
        <Popover.Anchor>
          <AutosizeInput
            autoFocus={props.autoFocus}
            value={query}
            onChange={e => setQuery(e.target.value)} />
        </Popover.Anchor>

        <Popover.Content 
          onOpenAutoFocus={evt => evt.preventDefault()}
          sideOffset={8}
          align="start"
          className="reconciliation-popover">
          <ul>
            {results.map((result, index) => (
              <li key={`${result.id}-${index}`}>
                <button onClick={onSelect(result)}>
                  {result.id}: {result.name}
                </button>
              </li>
            ))}
          </ul>
        </Popover.Content>
      </Popover.Root>
    </div>
  )

}
