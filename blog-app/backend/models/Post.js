const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema);