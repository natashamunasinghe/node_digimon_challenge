const express = require("express");
const router  = express.Router();
const DigimonController = require("./../controllers/digimon_controller");

//localhost:3000/digimons  -shows "hurrah!"
// router.get("/digimons", (req, res) => res.send("Hurrah!"));

router.get("/", DigimonController.index);

router.post("/", DigimonController.create);

router.get("/new", DigimonController.make);

router.delete("/:id", DigimonController.destroy);

router.patch("/:id", DigimonController.update);

router.put("/:id", DigimonController.update);

router.get("/:id", DigimonController.show);

router.get("/:id/edit", DigimonController.edit);

module.exports = router;