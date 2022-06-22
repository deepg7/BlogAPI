const blogModel = require("../../models/blog");

const postBlog = async (req, res) => {
  try {
    const blog = new blogModel(req.body);
    await blog.save();
    return res.status(201).send(blog);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
};

module.exports = postBlog;
