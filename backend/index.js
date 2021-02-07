require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");

const API = require("./routes/API");

const app = express();

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

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/image", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Server up and running");
});

app.use("/api", API);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
