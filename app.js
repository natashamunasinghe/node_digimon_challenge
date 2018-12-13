const mongoose = require("mongoose");
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
// const boostrap = require("bootstrap");
const app = express();
const port = 3000;
global.HTTPError = class HTTPError extends Error {
    constructor(statusCode, message ) {
        super(message);
        this.name ="HTTPError";
        this.statusCode = statusCode;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HTTPError);
        }
    }
}

//Setup mongoose
mongoose.connect("mongodb://localhost/digimon", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));

//Setup handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Setup body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//importing routes directory (including index.js file)
app.use(require("./routes"));

app.use((err, req, res, next) => {
    switch(err.name) {
        case "HTTPError":
            return res.status(err.statusCode).send(err.message);
        break;
    }
    next(err);
});

//setup port
app.listen(port, () => console.log(`server is listening on port ${port}`));

module.exports = app;
