const express = require("express");
const contacts = require("../controllers/contact.controller");


module.exports = (app) => {
    const router = express.Router();

    router.get("/",contacts.findALL);

    router.post("/",contacts.create);

    router.delete("/",contacts.deleteALL);

    router.get("/favorite",contacts.findALLFavorite);

    router.get("/:id",contacts.findOne);

    router.put("/:id",contacts.update);

    router.delete("/:id",contacts.delete);

    app.use("/api/contacts", router);
};