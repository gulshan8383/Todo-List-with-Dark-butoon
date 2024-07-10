const express = require('express');
const connectDB = require('./Config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config();

connectDB.connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
