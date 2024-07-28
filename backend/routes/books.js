const express = require('express');
const router = express.Router();
const Books = require('../models/books');

// @route   GET /api/books/
// @desc    Get all books
// @access  Public
router.get('/', async (req, res) => {
    try {
        const books = await Books.find({});
        res.send({ books });
    } catch (err) {
        res.status(500).send({ error: 'Server error' });
    }
});

// @route   GET /api/books/:id
// @desc    Get a specific book
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const book = await Books.findById(req.params.id);
        if (!book) {
            return res.status(404).send({ message: 'Book not found!' });
        }
        res.send({ book });
    } catch (err) {
        res.status(500).send({ error: 'Server error' });
    }
});

// @route   POST /api/books/
// @desc    Create a book
// @access  Public

router.post('/', async (req, res) => {
    try {
        // Check if a book with the same title already exists
        const existingBook = await Books.findOne({ title: req.body.title });

        if (existingBook) {
            // If a book with the same title exists, return an error
            return res.status(400).send({ error: 'Book with this title already exists' });
        }

        // If no duplicate found, create a new book
        const newBook = await Books.create({
            title: req.body.title,
            authors: req.body.authors,
            image: req.body.image,
            price: req.body.price
        });

        res.status(201).send({ newBook });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});


// @route   PUT /api/books/:id
// @desc    Update a book
// @access  Public
router.put('/:id', async (req, res) => {
    try {
        const updatedBook = await Books.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).send({ message: 'Book not found!' });
        }
        res.send({ message: 'The book was updated', updatedBook });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

// @route   DELETE /api/books/:id
// @desc    Delete a book
// @access  Public

router.delete('/:id', async (req, res) => {
    try {
      const removeStudent = await Students.findByIdAndDelete(req.params.id);
      res.send({ message: 'The student was removed' });
    } catch (err) {
      res.status(400).send({ error: err });
    }
  });
  

module.exports = router;
