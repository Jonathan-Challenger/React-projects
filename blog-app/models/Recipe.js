const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create recipe schema

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    steps: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);