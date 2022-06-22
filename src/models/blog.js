//IMPORTING MONGOOSE
const mongoose = require("mongoose");

//BLOG SCHEMA
const blogSchema = new mongoose.Schema({
  //NAME OF THE BLOG
  name: {
    type: String,
    required: true,
    //COULD BE UNIQUE
  },

  //CONTENT OF THE BLOG
  text: {
    type: String,
    required: true,
    //COULD HAVE A MIN AND MAX LENGTH
  },

  //COVER IMAGE OF THE BLOG
  cover: {
    type: String,
    required: true,
    //MAY NOT BE REQUIRED BUT SET TO A DEFAULT BLANK IMAGE
    //IF PROVIDED COULD BE SET AS UNIQUE USING INDEX AND PARTIALFILTEREXPRESSION ON EXISTS TRUE
  },

  //AUTHOR OF THE BLOG
  author: {
    type: String,
    required: true,
  },
});

//EXPORTING MODEL
const blogModel = mongoose.model("Blog", blogSchema);
module.exports = blogModel;
