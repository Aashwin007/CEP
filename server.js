// server.js

// Import required modules
const express = require('express');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Cold Email Platform API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
