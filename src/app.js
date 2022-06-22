//INITIALISING APP
const express = require("express");
const app = express();

//TO CONFIGURE ENVIRONMENT VARIABLES INTO PROCESS.ENV
require("dotenv").config();

//TO RUN THE FUNCTION THAT CONNECTS TO DATABASE
require("./db");

//TO GAIN ACCESS TO REQUEST BODY
app.use(express.json());

//REQUIRE ROUTER
const blogRouter = require("./routers/blog");

//USING ROUTERS
app.use("/blog", blogRouter);

module.exports = app;
