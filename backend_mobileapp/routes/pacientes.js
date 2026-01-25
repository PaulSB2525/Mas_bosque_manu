const express = require("express");
const router = express.Router();
const crearPaciente = require("../controllers/pacientes")

router.post("/", crearPaciente);

module.exports = router;