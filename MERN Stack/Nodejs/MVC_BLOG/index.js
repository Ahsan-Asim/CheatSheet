// index.js
const express = require('express');
const app = express();
const blogRoutes = require('./Routes/blog');

// Middleware to parse JSON
app.use(express.json());

app.use("/api/blog", blogRoutes);

app.listen(3000, () => {
  console.log("App listening at http://localhost:3000");
});
