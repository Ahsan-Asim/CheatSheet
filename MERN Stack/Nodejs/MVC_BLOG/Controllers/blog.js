// Controllers/blog.js
const Blog = require('../Models/blog');

exports.AddBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    
    const newBlog = new Blog({
      title,
      content
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add blog' });
  }
};
