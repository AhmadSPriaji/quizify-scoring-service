// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');
const scoreRoutes = require('./routes/score');

const app = express();

app.use(express.json());

// Routes
app.use('/api/score', scoreRoutes);

// MongoDB connection
mongoose.connect(config.mongoURI).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error(err.message);
  process.exit(1);
});

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => console.log(`Score Service started on port ${PORT}`));