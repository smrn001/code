import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./constants";
import Output from "./Output";

const CodeEditor = () => {
  const [value, setValue] = useState(CODE_SNIPPETS["JavaScript"]);
  const [language, setLanguage] = useState("JavaScript");
  const editorRef = useRef();

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setValue(CODE_SNIPPETS[newLanguage]);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row  ">
      {/* Code Editor Section */}
      <div className="relative   ">
        <LanguageSelector
          language={language}
          setLanguage={onLanguageChange} // Pass the new handler
        />
        <div className="min-h-[60vh] h-[60vh] resize border-black border-2 rounded-md sm:h-[80vh] max-w-full w-screen sm:w-[50vw]">
          <Editor
            height="100%" // Adjust editor height to the container
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            value={value} // Controlled value based on state
            onMount={onMount}
            onChange={(newValue) => setValue(newValue)} // Keep track of editor value
          />
        </div>
      </div>

      {/* Output Section */}
      <div className="flex-1 min-h-[40vh] h-[60vh]  rounded-md sm:h-[40vh] max-w-full w-screen sm:w-[50vw] ">
        <Output editorRef={editorRef} language={language}></Output>
      </div>
    </div>
  );
};

export default CodeEditor;
