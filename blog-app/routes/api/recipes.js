const express = require('express');
const router = express.Router();

// Recipe model
const Recipe = require('../../models/Recipe');

// @route GET api/recipes
// @desc Get all recipes
// @access PUBLIC
router.get('/', (req, res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
});


// @route POST api/recipes
// @desc Add a recipe
// @access PUBLIC
router.post('/', (req, res) => {
    const newRecipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        steps: req.body.steps
    });

    newRecipe.save()
        .then(recipe => res.json(recipe))
});

// @route DELETE api/recipes/:id
// @desc Delete a recipes
// @access PUBLIC
router.delete('/:id', (req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => recipe.remove().then(() => res.json({ success: true})))
        .catch(err => res.status(404).json({ success:false }));
});

module.exports = router;