//Import Service
const bookService = require('../services/bookService.js');

//Get all Books
exports.getAllBooks = async (req, res, next) => {
    try {
        const books = await bookService.getAllBooks();

        res.status(200).json({
            statusCode: 200,
            data: books,
            message: 'Books retrieved using service'
        });
    } catch (error) {
        next(error);
    }
};

//Get book by ID
exports.getBookById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const book = bookService.getBookById(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(
            {
                statusCode: 200,
                data: book
            });
    } catch (error) {
        next(error);
    }
};
