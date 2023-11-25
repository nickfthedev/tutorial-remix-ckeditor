

import { useState, useEffect } from 'react';
import { Form } from '@remix-run/react';

// CK5 Rich-Text-Editor Types
import type ChangeEvent from "@ckeditor/ckeditor5-utils/src/eventinfo";
import type ClassicEditor from "@ckeditor/ckeditor5-build-classic";



export default function Index(){
    const [TextEditorContent, setTextEditorContent] = useState("");
    const [TextEditorComponent, setTextEditorComponent] = useState<React.ElementType | null>(null);
  
    useEffect(() => {
      async function loadTextEditor() {
        try {
          console.log('Attempting to load TextEditor');
          const { TextEditor } = await import('../../components/editor');
          console.log('TextEditor loaded:', TextEditor);
          setTextEditorComponent(() => TextEditor);
        } catch (error) {
          console.error('Failed to load TextEditor:', error);
        }
      }
      loadTextEditor();
    }, []);

    return (
        <Form>
        <h1>CKEditor + RemixJS</h1>

        <input type='hidden' name="message" value={TextEditorContent} />

        {TextEditorComponent && <TextEditorComponent data={TextEditorContent} onChange={(event: ChangeEvent, editor: ClassicEditor) => {
          const data = editor.getData();
          setTextEditorContent(data);
          console.log({ event, editor, data });
          }} 
          />
        }

      </Form>
    )
}