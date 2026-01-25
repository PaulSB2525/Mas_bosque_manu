const express = require("express");
const router = express.Router();
const crearAdmin = require("../controllers/admins")

router.post("/", crearAdmin);

module.exports = router;