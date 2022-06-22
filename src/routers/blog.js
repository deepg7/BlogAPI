const { Router } = require("express");
const blogModel = require("../models/blog");
const router = Router();

const postBlog = require("../controllers/blog/post");
const getManyBlogs = require("../controllers/blog/getManyBlogs");
const getBlog = require("../controllers/blog/getBlog");
const updateBlog = require("../controllers/blog/updateBlog");
const deleteBlog = require("../controllers/blog/deleteBlog");

router.post("/", postBlog);

router.get("/", getManyBlogs);

router.get("/:id", getBlog);

router.patch("/:id", updateBlog);

router.delete("/:id", deleteBlog);

module.exports = router;
