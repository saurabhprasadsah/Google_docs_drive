const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const PORT = 3000;


// Simple GET route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
