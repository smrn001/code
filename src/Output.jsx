import PropTypes from "prop-types";
import { executeCode } from "./api";
import { useState } from "react";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
    } catch (error) {
      console.error(error);
      setOutput("Error running code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 bg-[#181818] rounded-lg h-full  ">

      <div className="mb-4">
        {/* Button to Run Code */}
        <button
          type="button"
          onClick={runCode}
          disabled={isLoading} // Disable the button while loading
          className={`py-2 px-4 font-semibold rounded-lg shadow-md transition-all duration-300 ${
            isLoading
              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
              : "bg-primary text-white hover:bg-opacity-85"
          }`}
        >
          {isLoading ? "Running..." : "Run Code"}
        </button>
      </div>
     
      <div className="bg-black min-h-[50vh]  border-black rounded-lg p-4 overflow-auto sm:h-[80vh]   text-gray-200 ">
        {/* Output container */}
        {output
          ? output.map((line, i) => <p key={i}>{line}</p>)
          : "Your code output will appear here..."}
      </div>
    </div>
  );
};

// PropTypes Validation
Output.propTypes = {
  editorRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired, // editorRef must be a reference object
  language: PropTypes.string.isRequired, // language must be a string
};

export default Output;
