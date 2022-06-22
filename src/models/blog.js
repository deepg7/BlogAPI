const mongoose = require("mongoose");

//CONTACT SCHEMA
const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

//EXPORTING MODEL
const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
