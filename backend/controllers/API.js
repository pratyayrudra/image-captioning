const ImageStore = require("../models/ImageStore");
const Crypto = require("crypto");
const FormData = require("form-data");
const axios = require("axios").default;
var fs = require("fs");

GetHandler = async (req, res) => {
  const q = req.query.q ? req.query.q : "";
  const l = req.query.limit ? +req.query.limit : 0;
  let response;
  if (q && l) {
    //Get entries with query and limit
    response = await ImageStore.find(
      {
        caption: { $regex: new RegExp(q), $options: "i" },
      },
      null,
      {
        limit: l,
        sort: { createdAt: -1 },
      }
    );
  } else if (l) {
    //Get entries with only limit
    response = await ImageStore.find({}, null, {
      limit: l,
      sort: { createdAt: -1 },
    });
  } else if (q) {
    //Get entries with queries
    response = await ImageStore.find({
      caption: { $regex: new RegExp(q), $options: "i" },
    });
  } else {
    //Get entries default
    response = await ImageStore.find({});
  }
  res.send(response);
};

ModelHandler = async (req, res) => {
  const image = req.files.image;

  let fileName = Crypto.randomBytes(6).toString("hex") + "_" + image.name;
  fileName = fileName.replace(/ /g, "_");

  image.mv(`./uploads/${fileName}`);

  let data = new FormData();
  data.append("file1", fs.createReadStream(`./uploads/${fileName}`));
  let response = await axios.post(process.env.MODEL_URL, data, {
    headers: data.getHeaders(),
  });

  let caption = response.data;

  let NewImageStore = new ImageStore({
    imageName: fileName,
    caption: caption,
  });

  let imageStore = await NewImageStore.save();

  res.send({
    status: true,
    data: imageStore,
  });
};

module.exports = {
  GetHandler,
  ModelHandler,
};
