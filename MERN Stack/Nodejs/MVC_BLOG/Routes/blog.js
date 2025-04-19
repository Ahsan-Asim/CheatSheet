// Routes/blog.js
const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blog');

// Use POST instead of addBlog (not a method)
router.post('/add', blogController.AddBlog);

module.exports = router;
