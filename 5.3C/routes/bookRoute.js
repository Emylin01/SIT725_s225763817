const express = require('express');
const router = express.Router();

//Import all controller via index.js
const Controller = require('../controllers');

// GET all books
router.get('/', Controller.bookController.getAllBooks);

// GET book by ID
router.get('/:id', Controller.bookController.getBookById);

module.exports = router;