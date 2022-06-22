const blogModel = require("../../models/blog");

const deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);
    if (!blog) return res.status(404).send("Requested resource not found");
    await blog.remove();
    return res.status(200).send({ message: "Deleted successfully", blog });
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
};

module.exports = deleteBlog;
