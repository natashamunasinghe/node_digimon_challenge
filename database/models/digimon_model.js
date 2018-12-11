const mongoose = require("mongoose");
const DigimonSchema = require("./../schemas/digimon_schema");

//create Model by giving in name of collection and passing in Schema
const DigimonModel = mongoose.model("digimon", DigimonSchema);

module.exports = DigimonModel;
