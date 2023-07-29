const express = require('express');
const app = express();
require('dotenv').config()
const router = require('./src/routers')
app.use(express.json())

router(app)
// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, this is the homepage!');
});

app.get('/success', (req, res) => {
  res.send('Hello, this is the success page!');
});

app.get('/cancel', (req, res) => {
  res.send('Hello, this is the cancel page!');
});

// Start the server
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
