const express = require("express");
const router  = express.Router();
const DigimonController = require("./../controllers/digimon_controller");
const { celebrate, Joi } = require("celebrate");


//localhost:3000/digimons  -shows "hurrah!"
// router.get("/digimons", (req, res) => res.send("Hurrah!"));

router.get("/", DigimonController.index);

router.post("/", celebrate ({
    body: {
        name: Joi.string().required(),
        bio: Joi.string().required(),
        // superpower: Joi.string().required(),
        superpower: Joi.any().valid('vaccine', 'virus', 'data'),
    }
}), DigimonController.create);

router.get("/new", DigimonController.make);

router.delete("/:id", DigimonController.destroy);

router.patch("/:id", DigimonController.update);

router.put("/:id", DigimonController.update);

router.get("/:id", DigimonController.show);

router.get("/:id/edit", DigimonController.edit);

module.exports = router;