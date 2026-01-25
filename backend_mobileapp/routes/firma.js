const express = require("express");
const router = express.Router();
const obtenerFirma = require("../controllers/firma");

router.get("/", obtenerFirma);

module.exports = router;