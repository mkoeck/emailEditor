import React, { useRef } from "react";
import "./styles.css";
import sample from "./savefile.json";

import EmailEditor from "react-email-editor";

const App = (props) => {
  const emailEditorRef = useRef(null);
  console.log("emailEditorRef 1", emailEditorRef);
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("emailEditorRef 2", emailEditorRef);
      console.log("exportHtml", html);
      alert("Output HTML has been logged in your developer console.");
    });
  };

  const saveDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
      console.log("saveDesign", JSON.stringify(design, null, 4));
      alert("Design JSON has been logged in your developer console.");
    });
  };

  const onDesignLoad = (data) => {
    console.log("onDesignLoad", data);
  };

  const onLoad = () => {
    emailEditorRef.current.editor.addEventListener(
      "onDesignLoad",
      onDesignLoad
    );
    emailEditorRef.current.editor.loadDesign(sample);
  };

  return (
    <div className="container">
      <div>
        <button onClick={saveDesign}>Save Design</button>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} minHeight="90vh" />
    </div>
  );
};

export default App;
