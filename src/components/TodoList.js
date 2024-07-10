import React, { useState, useEffect } from 'react';
import api from '../api';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // Function to fetch todos from backend
  const fetchTodos = async () => {
    try {
      const response = await api.get('/todos'); // Assuming your endpoint is /todos
      setTodos(response.data); // Update todos state with fetched data
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Function to handle deleting a todo
  const handleDeleteTodo = async (id) => {
    try {
      await api.delete(`/todos/${id}`); // Assuming your endpoint to delete a todo
      fetchTodos(); // Refresh todos after deletion
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      {todos.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {todos.map((todo) => (
            <li key={todo._id} className="py-2">
              <div className="flex items-center justify-between">
                <div>
               
                  <h3 className="text-lg font-medium">{todo.message}</h3>
                  <p>Date: {todo.date}</p>
                  <p>Category: {todo.category}</p>
                 
                  {/* Additional fields as needed */}
                </div>
                {todo.image && (
                    <img src={todo.image} alt="Todo" className="w-32 h-32 rounded-lg mt-2 cursor-pointer" />
                  )}
                <button
                  onClick={() => handleDeleteTodo(todo._id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
