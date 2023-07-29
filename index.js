
const express = require('express');
const cors = require('cors')
const router = require('./src/routers')
const app = express();
app.use(express.json())
app.use(cors());

require('dotenv').config()

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
