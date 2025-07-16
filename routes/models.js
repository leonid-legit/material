const express = require('express');
const router = express.Router();

// In-memory registry of AI models
const aiModels = [];

// POST /models/add-gpt41 - Add the GPT-4.1 model
router.post('/models/add-gpt41', (req, res) => {
    const gpt41Model = {
        id: aiModels.length + 1,
        name: 'GPT-4.1',
        version: '4.1',
        description: 'A cutting-edge generative language model with advanced reasoning and coding capabilities.',
        addedAt: new Date()
    };

    aiModels.push(gpt41Model);

    res.status(201).json({
        message: 'GPT-4.1 model added successfully.',
        model: gpt41Model
    });
});

module.exports = router;
