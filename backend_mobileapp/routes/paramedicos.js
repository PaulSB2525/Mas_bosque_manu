const express = require("express");
const router = express.Router();
const crearParamedico = require("../controllers/paramedicos")

router.post("/", crearParamedico);

module.exports = router;