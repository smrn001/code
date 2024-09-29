import { useState } from "react";
import PropTypes from "prop-types"; // Import prop-types
import { LANGUAGE_VERSIONS } from "./constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang); // Update the selected language
    setIsOpen(false);  // Close the dropdown
  };

  return (
    <div className="relative inline-flex w-full lg:w-auto m-4">
      <button
        type="button"
        onClick={toggleDropdown}
        className="dropdown-toggle inline-flex justify-between items-center  lg:w-auto gap-2 py-2 px-4 text-sm bg-primary text-white dark:bg-primary dark:text-gray-100 rounded-md cursor-pointer font-semibold text-center shadow-md shadow-[#202020] transition-all duration-300 hover:bg-opacity-85 dark:hover:bg-opacity-85"
      >
        <span>{language}</span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown-default"
          className="dropdown-menu rounded-xl shadow-lg bg-white dark:bg-gray-800 absolute top-full w-64 lg:w-80 mt-2 z-10"
          aria-labelledby="dropdown-default"
        >
          {languages.map(([lang, version]) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              type="button"
              className={`dropdown-item w-full px-6 py-2 text-sm flex justify-between text-gray-800 dark:text-gray-200 
                ${language === lang ? "bg-gray-200 dark:bg-gray-700" : ""} 
                hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300`}
            >
              <p className="font-medium">{lang}</p>
              <p className="font-semibold text-indigo-700 dark:text-indigo-300">
                {version}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Prop Types Validation
LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,     // language must be a string
  setLanguage: PropTypes.func.isRequired,    // setLanguage must be a function
};

export default LanguageSelector;