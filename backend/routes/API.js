const app = require("express")();
const API = require("../controllers/API");

app.get("/", API.GetHandler);

module.exports = app;
