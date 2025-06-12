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

module.exports = router;
