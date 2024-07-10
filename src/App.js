import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import DarkModeButton from "./components/DarkModeButton"


const App = () => {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Fetch todos from backend
  useEffect(() => {
    // Implement fetching todos from backend
    // Example: fetchTodos();
  }, []);

  const handleAddTodo = (newTodo) => {
    // Implement adding todo to backend
    // Example: addTodo(newTodo);
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    // Implement deleting todo from backend
    // Example: deleteTodo(id);
    const updatedTodos = todos.filter(todo => todo._id !== id);
    setTodos(updatedTodos);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const toggleDarkMode = (mode) => {
    setDarkMode(mode);
    // Implement logic to switch dark/light mode styles globally
    // Example: document.body.classList.toggle('dark-mode', mode);
  };


  return (
    <div className={`app ${darkMode ? 'dark' : ''}` }>
    <DarkModeButton toggleDarkMode={toggleDarkMode} />
      <Navbar onAddTodo={toggleForm} />
     <section className='dark:bg-gray-900 mt-[-0.95rem] h-fit dark:text-white'>
     {showForm && <TodoForm onAdd={handleAddTodo} onClose={toggleForm} />}
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
      
     </section>

 
    </div>
  );
};

export default App;
