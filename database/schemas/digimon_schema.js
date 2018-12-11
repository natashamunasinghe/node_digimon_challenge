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
     superpower: {
        type: String,
        enum: ["virus", "vaccine", "data"],
        default: "data"
     }
});

module.exports = DigimonSchema;

