const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fullstackDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Create a schema for the data
const DataSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Data = mongoose.model('Data', DataSchema);

// API endpoint to get all data
app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// API endpoint to add data
app.post('/api/data', async (req, res) => {
  try {
    const newData = new Data({
      name: req.body.name,
      description: req.body.description
    });
    await newData.save();
    res.json(newData);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// Serve static files from the "public" directory
app.use(express.static('public'));

