const express = require("express");
const Router = express.Router();

// Controller for Current Prices
const Controller = require('../controllers/controllers');

Router.get("/prices", Controller.CurrentPrice);

module.exports = Router;
