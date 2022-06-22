const blogModel = require("../../models/blog");

const getManyBlogs = async (req, res) => {
  try {
    let blogs = await blogModel.find();
    let page = req.query.page;
    const limit = req.query.limit;
    if (limit) {
      page = Number(page) || 1;
      const start = (page - 1) * limit;
      const end = start + limit;
      blogs = blogs.slice(start, end);
    }
    return res.status(200).send(blogs);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
};

module.exports = getManyBlogs;
