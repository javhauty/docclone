import React, { useState, useEffect } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import io from "socket.io-client";

const App = () => {
  const editor = withReact(createEditor());
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);

  useEffect(() => {
    const socket = io.connect("http://localhost:4000");
    socket.on("document", (doc) => {
      setValue(doc);
    });
    // Send operational transforms to the server when the document is edited
    // Update the document state when an updated document is received from the server
    return () => {
      socket.disconnect();
    };
  }, []);

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <Slate editor={editor} value={value} onChange={onChange}>
      <Editable />
    </Slate>
  );
};

export default App;
