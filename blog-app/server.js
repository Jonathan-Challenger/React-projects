const express = require('express');
const mongoose = require('mongoose');

const app = express();

// JSON middleware
app.use(express.json());

// Connect to MongDB
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));



// Use routes
const recipes = require('./routes/api/recipes');
app.use('/api/recipes', recipes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));