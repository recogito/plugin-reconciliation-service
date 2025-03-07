import { useState } from "react";
import { createBody } from '@annotorious/react';
import { AnnotationEditorExtensionProps, VocabularyTerm } from "@recogito/studio-sdk";
import { ReconciliationAutosuggest } from "./components/ReconciliationAutosuggest";
import {Tag} from '@phosphor-icons/react';

import './ReconciliationEditorExtension.css'

export const ReconciliationEditorExtension = (props: AnnotationEditorExtensionProps) => {

  const { annotation, me } = props;

  const [isOpen, setIsOpen] = useState(false);

  const onChange = (term: VocabularyTerm) => {
    // ...nothing to do
  }

  const onSubmit = (term: VocabularyTerm) => {
    const updated = {
      ...annotation,
      bodies: [
        ...annotation.bodies,
        createBody(annotation, {
          purpose: 'tagging',
          value: JSON.stringify(term)
        }, new Date(), {
          id: me.id,
          name: me.name,
          avatar: me.avatar
        })
      ]
    }

    props.onUpdateAnnotation(updated);

    // Close the input field after adding the tag
    setIsOpen(false);
  }

  return isOpen ? (
    <ReconciliationAutosuggest
      autoFocus
      plugin={props.plugin}
      extension={props.extension}
      settings={props.settings}
      onChange={onChange}
      onSubmit={onSubmit}
      />
  ) : (
    <button className='reconciliation-button' onClick={() => setIsOpen(true)}><Tag/>Add Getty Tag</button>
  )

}