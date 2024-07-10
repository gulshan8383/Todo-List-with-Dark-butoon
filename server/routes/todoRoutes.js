const express = require('express');
const router = express.Router();
const todoController = require("../controllers/todoController");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/todos', upload.single('image'), todoController.createTodo);

// GET /todos - Retrieve all todos
router.get('/todos', todoController.getTodos);

// DELETE /todos/:id - Delete a todo by ID
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
