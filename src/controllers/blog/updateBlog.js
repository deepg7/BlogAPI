const blogModel = require("../../models/blog");

const updateBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);
    if (!blog) return res.status(404).send("Requested resource not found");
    const updates = Object.keys(req.body);
    if (updates.includes("_id")) throw { message: "Forbidden", status: 403 };
    updates.forEach((update) => {
      blog[update] = req.body[update];
    });
    await blog.save();
    return res.status(200).send({ message: "Updated successfully", blog });
  } catch (e) {
    console.log(e);
    return res.status(e.status || 400).send(e);
  }
};

module.exports = updateBlog;
