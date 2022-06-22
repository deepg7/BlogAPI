const blogModel = require("../../models/blog");

const getBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);
    if (!blog) return res.status(404).send("Requested resource not found");
    return res.send(blog);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
};

module.exports = getBlog;
