import React from 'react';

const Navbar = ({ onAddTodo }) => {
  return (
    <nav className="bg-gray-800 p-4 dark:bg-gray-200">
      <div className="flex items-center justify-between">
        <div className="text-white dark:text-gray-900 font-bold">Task Manager</div>
        <button
          onClick={onAddTodo}
          className="bg-blue-500 dark:bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Todo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
