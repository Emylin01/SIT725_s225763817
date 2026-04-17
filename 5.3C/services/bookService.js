const books = require('../models/bookModel');

const getAllBooks = async () => {
    return await books.find({});
};

const getBookById = async (id) => {
    return books.find(book => book.id === id);
};

module.exports = {
    getAllBooks,
    getBookById
};