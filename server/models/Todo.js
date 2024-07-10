const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Todo', todoSchema);
