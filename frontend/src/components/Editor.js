import React, { useState, useRef, useEffect } from "react";
import { Editor, createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const TextEditor = () => {
  const editor = useRef(withReact(createEditor()));
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);

  useEffect(() => {
    // Setup websocket connection here
    // Send operational transforms to the server when the document is edited
    // Update the document state when an updated document is received from the server
  }, []);

  return (
    <Slate
      editor={editor.current}
      value={value}
      onChange={(value) => setValue(value)}
    >
      <Editable />
    </Slate>
  );
};

export default TextEditor;
