import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Suspense } from "react";

import type { Editor } from "@ckeditor/ckeditor5-core";
import type  ChangeEvent  from "@ckeditor/ckeditor5-utils/src/eventinfo";

interface TextEditorProps {
  data: string;
  onChange: (event: ChangeEvent, editor: Editor) => void;
}

  export function TextEditor({ data, onChange }: TextEditorProps) {

    return (
      <div>

      <Suspense fallback={"<div>Loading</div>"}>
        <CKEditor
          editor={ClassicEditor}
          data={data}
    		  onChange={onChange}
          // onReady={ editor => {
          //     // You can store the "editor" and use when it is needed.
          //     console.log( 'Editor is ready to use!', editor );
          // } }
      	  //   onChange={(event, editor) => {
          //     const data = editor.getData();
          //     console.log({ event, editor, data });
          //   }}
          onBlur={ ( event, editor ) => {
              console.log( 'Blur.', editor );
          } }
          // onFocus={ ( event, editor ) => {
          //     console.log( 'Focus.', editor );
          // } }
        />
      </Suspense>
      </div>

    );
  
}
