require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const API = require("./routes/API");

const app = express();
app.use(express.json());

mongoose.connect(
  process.env.MONGO_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Database connected");
    } else {
      console.log("Database not connected");
    }
  }
);

app.get("/", (req, res) => {
  res.send("Server up and running");
});

app.use("/api", API);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
