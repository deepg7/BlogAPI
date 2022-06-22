//INITIALISING THE EXPRESS ROUTER
const { Router } = require("express");
const router = Router();

//IMPORTING THE CONTROLLER FUNCTIONS
const postBlog = require("../controllers/blog/post");
const getManyBlogs = require("../controllers/blog/getManyBlogs");
const getBlog = require("../controllers/blog/getBlog");
const updateBlog = require("../controllers/blog/updateBlog");
const deleteBlog = require("../controllers/blog/deleteBlog");

//POST A BLOG
router.post("/", postBlog);

//GET ALL BLOGS
router.get("/", getManyBlogs);

//GET A BLOG BY ID
router.get("/:id", getBlog);

//UPDATE A BLOG BY ID USING PATCH PROTOCOL
router.patch("/:id", updateBlog);

//DELETE A BLOG BY ID
router.delete("/:id", deleteBlog);

//EXPORT ROUTER
module.exports = router;
