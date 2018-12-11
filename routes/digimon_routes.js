const express = require("express");
const router  = express.Router();
const DigimonController = require("./../controllers/digimon_controller");

//localhost:3000/digimons  -shows "hurrah!"
// router.get("/digimons", (req, res) => res.send("Hurrah!"));

router.get("/", DigimonController.index);

router.delete("/:id", DigimonController.destroy);

router.post("/:id", DigimonController.create);

router.get("/:id", DigimonController.edit);






module.exports = router;