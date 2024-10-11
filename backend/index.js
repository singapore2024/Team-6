const express = require('express');
const app = express();

app.use(function (req, res, next) {
    // Allow all origins (or specify the origin explicitly in production)
    res.header("Access-Control-Allow-Origin", "*");
    
    // Allow specific headers required by your frontend
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    // Allow specific HTTP methods
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  
    // If this is a preflight request, respond with 200 and end the request
    if (req.method === "OPTIONS") {
      res.status(200).end(); // Respond to OPTIONS with 200 OK
    } else {
      next(); // For other requests, proceed to next middleware or route handler
    }
  });
  

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }))
const db = require('./database');

// Basic GET route for the home page
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/recipes', require('./routes/recipes'));
app.use('/api/v1/orders', require('./routes/orders'));
app.use('/api/v1/leaveRequests', require('./routes/leaveRequests'));

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
