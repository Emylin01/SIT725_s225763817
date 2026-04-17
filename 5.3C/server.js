const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//Connecting to the database
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/booksDB');

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const bookRoutes = require('./routes/bookRoute.js');
app.use('/api/books', bookRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});