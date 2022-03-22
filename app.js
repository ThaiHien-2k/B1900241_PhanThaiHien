const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "welcome to contact book application."});
});



const setupContactRoutes = require("./app/routes/contact.routes");
setupContactRoutes(app);
module.exports = app;


const{ BadRequestError, errorHandler } = require("./app/errors");


const errors = require("./app/errors");


app.use((req, res , next) => {
    next(new BadRequestError(404,"Resource not found"));
});


app.use((err, req, res , next) => {
   errorHandler.handleError(error, res);
});
