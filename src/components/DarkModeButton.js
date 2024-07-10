import React, { useState } from 'react';

const DarkModeButton = ({ toggleDarkMode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    toggleDarkMode(!darkMode); // Pass the current state to parent component
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-4 right-4 bg-gray-800 dark:bg-white dark:text-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow-md"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeButton;
