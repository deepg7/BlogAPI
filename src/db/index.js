//IMPORTING MODULES,PACKAGES AND MODELS
const mongoose = require("mongoose");
const blogModel = require("../models/blog");

//DECLARING MONGO URI
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/test";

//CONNECTING TO MONGO, INITIALISING ALL MODELS AND SCHEMAS
mongoose
  .connect(MONGO_URI)
  .then(async () => {
    await blogModel.init();
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });
