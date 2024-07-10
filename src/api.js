import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todo-list-with-dark-butoon.onrender.com',
});

export default api;
