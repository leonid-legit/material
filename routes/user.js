// routes/user.js
const express = require('express');
const router = express.Router();

/**
 * @route GET /api/v1/users/summary
 * @desc Get a summary of all users
 * @access Public
 */
router.get('/summary', (req, res) => {
    res.json({ message: "User summary endpoint added." });
});

/**
 * @route POST /api/v1/users/register
 * @desc Register a new user
 * @access Public
 */
router.post('/register', (req, res) => {
    const { name, email } = req.body;
    // Dummy logic for now
    res.status(201).json({ message: `User ${name} registered successfully.` });
});

module.exports = router;
