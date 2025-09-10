// backend/server.js

const express = require('express');
const cors = require('cors'); // Required to allow frontend requests
const app = express();
const port = 5000; // API will run on this port

// Use CORS middleware
app.use(cors());

// Define the API endpoint
app.get('/api/message', (req, res) => {
  res.json({
    message: "Hello from the Backend API! 🚀",
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});