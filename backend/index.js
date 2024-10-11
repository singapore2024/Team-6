const express = require('express');
const app = express();

// Middleware (Parsers, etc.)
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: false }))
const db = require('./database');

// Basic GET route for the home page
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/recipes', require('./routes/recipes'));
app.use('/api/v1/orders', require('./routes/orders'));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express app!' });
});

// Another example of a GET route
app.get('/about', (req, res) => {
  res.json({ message: 'This is the about page.' });
});

// Catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).json({ message: '404 - Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
