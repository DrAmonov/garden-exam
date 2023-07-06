const express = require("express");
const cors = require("cors");

const routes = require("../routes");

const fileUpload = require("express-fileupload");

const modules = async (app) => {
  app.use(express());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(fileUpload());

  app.use("/uploads", express.static(process.cwd() + "/uploads"));


  app.use(routes);
};

module.exports = modules;
