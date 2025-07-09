const express = require('express');
const app = express();

app.use(express.json());

// Import routes
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');

// Mount routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/books', bookRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
