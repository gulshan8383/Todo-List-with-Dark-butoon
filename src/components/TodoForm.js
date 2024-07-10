import React, { useState } from 'react';
import api from '../api';
import { FaTimes } from 'react-icons/fa';

const TodoForm = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('message', message);
    formData.append('date', date);
    formData.append('category', category);
    if (image) formData.append('image', image);

    try {
      await api.post('/todos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onClose(); // Call onClose if successfully added todo
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-gray-800 text-white p-6 rounded shadow-md w-96 dark:bg-gray-100 dark:text-black">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Todo</h2>
          <FaTimes className="cursor-pointer" onClick={onClose} />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded text-black"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded text-black"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded text-black"
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
