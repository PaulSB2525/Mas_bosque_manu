const express = require("express");
const router = express.Router();
const crearReporte = require("../controllers/reportes")

router.post("/", crearReporte);

module.exports = router;