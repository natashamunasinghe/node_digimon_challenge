const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DigimonSchema = new Schema({
    name: {
        type: String,
        required: true
     },
     bio: {
        type: String,
        default: "No Bio"
     },
     gender: {
        type: String,
        enum: ["Virus", "Vaccine", "Data"],
        default: "Data"
     }
});

module.exports = DigimonSchema;

