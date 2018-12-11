const express = require("express");
const router  = express.Router();
const digimonRoutes = require("./digimon_routes");

//localhost:3000/digimon  -shows "hurrah!"
router.use("/digimons", digimonRoutes);

module.exports = router;


