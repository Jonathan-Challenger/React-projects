const express = require('express');
const mongoose = require('mongoose');

const app = express();

// BodyParser
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

mongoose.connect(db)
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));