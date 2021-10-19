const express = require('express');
const router = express.Router();

// Blog model
const Blog = require('../../models/Blog');

// @route GET api/blogs
// @desc Get all blogs
// @access PUBLIC
router.get('/', (req, res) => {
    Blog.find()
        .then(blogs => res.json(blogs))
});


// @route POST api/blogs
// @desc Add a blog
// @access PUBLIC
router.post('/', (req, res) => {
    const newBlog = new Blog({
        title: req.body.title,
        content: req.body.content,
    });

    newBlog.save()
        .then(blog => res.json(blog))
});

// @route DELETE api/blogs/:id
// @desc Delete a blog
// @access PUBLIC
router.delete('/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => blog.remove().then(() => res.json({ success: true})))
        .catch(err => res.status(404).json({ success:false }));
});

module.exports = router;