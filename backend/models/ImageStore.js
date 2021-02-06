const mongoose = require("mongoose");

const ImageStore = mongoose.Schema({
  path: String,
  caption: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ImageStore", ImageStore);