require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongoDB connection
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// define the Mongoose schema for quotes
const quoteSchema = new mongoose.Schema({
  text: String,
  author: String
});

// create a Mongoose model based on the schema
const Quote = mongoose.model('Quote', quoteSchema);

// define an endpoint to get a random quote
app.get('/random-quote', async (req, res) => {
  try {
    // count the total number of quotes in the database
    const count = await Quote.countDocuments();

    // generate a random index within the range of the total number of quotes
    const randomIndex = Math.floor(Math.random() * count);

    // retrieve a random quote from the database using the generated index
    const randomQuote = await Quote.findOne().skip(randomIndex);

    // send the random quote as the response
    res.json(randomQuote);
  } catch (err) {
    console.error('Error getting random quote:', err);
    res.status(500).json({ error: 'Failed to retrieve random quote' });
  }
});

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
