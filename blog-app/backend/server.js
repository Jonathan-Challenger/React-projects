const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

// BodyParser
app.use(express.json());

// DB config
const db = config.get('mongoURI');

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

// Use routes
app.use('/api/auth', require('./routes/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));