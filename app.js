const express = require('express');
const app = express();
const port = 3000;

// Serve static files (if any)
app.use(express.static('public'));

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
