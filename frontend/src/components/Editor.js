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
    // Handle incoming and outgoing messages
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
