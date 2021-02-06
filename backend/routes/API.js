const app = require("express")();
const axios = require("axios").default;

const API = require("../controllers/API");

app.get("/", API.GetHandler);

app.post("/model", API.ModelHandler);

module.exports = app;
