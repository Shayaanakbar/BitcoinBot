const express = require("express");

const router = express.Router();

const Contoller = require('../controllers/controllers');

router.get("/prices", Contoller.CurrentPrice);

module.exports = router;
