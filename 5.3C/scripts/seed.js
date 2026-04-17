const mongoose = require('mongoose');
const Book = require('../models/bookModel');

mongoose.connect('mongodb://127.0.0.1:27017/booksDB');

const books = [
  {
    id: "b1",
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    year: 2008,
    genre: "Science Fiction",
    summary: "The Three-Body Problem is the first novel...",
    price: mongoose.Types.Decimal128.fromString("19.99")
  },
  {
    id: "b2",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: 1847,
    genre: "Classic",
    summary: "An orphaned governess...",
    price: mongoose.Types.Decimal128.fromString("14.50")
  },
  {
    id: "b3",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Classic",
    summary: "Elizabeth Bennet...",
    price: mongoose.Types.Decimal128.fromString("12.00")
  },
  {
    id: "b4",
    title: "The English Patient",
    author: "Michael Ondaatje",
    year: 1992,
    genre: "Historical Fiction",
    summary: "In a ruined villa...",
    price: mongoose.Types.Decimal128.fromString("18.75")
  },
  {
    id: "b5",
    title: "Small Gods",
    author: "Terry Pratchett",
    year: 1992,
    genre: "Fantasy",
    summary: "In Omnia, the god Om...",
    price: mongoose.Types.Decimal128.fromString("16.20")
  }
];

async function seedDB() {
  await Book.deleteMany({});
  await Book.insertMany(books);
  console.log("Database seeded!");
  mongoose.connection.close();
}

seedDB();