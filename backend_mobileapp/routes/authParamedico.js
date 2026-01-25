const express = require("express");
const router = express.Router();
const authParamedico = require("../controllers/authParamedicos")

router.post("/", authParamedico);

module.exports = router;