const { Router } = require("express");
const blogModel = require("../models/blog");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const blog = new blogModel(req.body);
    await blog.save();
    return res.status(201).send(blog);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});

router.get("/", async (req, res) => {
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
});

router.get("/:id", async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);
    if (!blog) return res.status(404).send("Requested resource not found");
    return res.send(blog);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});

router.patch("/:id", async (req, res) => {
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
});

router.delete("/:id", async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);
    if (!blog) return res.status(404).send("Requested resource not found");
    await blog.remove();
    return res.status(200).send({ message: "Deleted successfully", blog });
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});

module.exports = router;
