const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create blog schema

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Blog = mongoose.model('blog', BlogSchema);