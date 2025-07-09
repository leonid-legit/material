const express = require('express');
const router = express.Router();

/**
 * @route GET /api/v1/books
 * @desc Get all books in the system
 * @access Public
 */
router.get('/', (req, res) => {
    // Dummy data
    const books = [
        { id: 1, title: "Clean Architecture", author: "Robert C. Martin" },
        { id: 2, title: "Refactoring", author: "Martin Fowler" }
    ];

    res.json({ books });
});

/**
 * @route POST /api/v1/books
 * @desc Add a new book to the system
 * @access Public
 */
router.post('/', (req, res) => {
    const { title, author } = req.body;

    // Dummy response
    res.status(201).json({
        message: "Book added successfully.",
        book: {
            id: Date.now(), // Fake ID
            title,
            author
        }
    });
});

module.exports = router;
