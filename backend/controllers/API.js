const ImageStore = require("../models/ImageStore");

GetHandler = async (req, res) => {
  const q = req.query.q ? req.query.q : "";
  const l = req.query.limit ? +req.query.limit : 0;
  let response;
  if (q || l) {
    //Get entries with query / limit
    response = await ImageStore.find(
      {
        caption: { $regex: new RegExp(`/${q}/`), $options: "i" },
      },
      null,
      {
        limit: l,
        sort: { createdAt: -1 },
      }
    );
  } else {
    //Get entries default
    response = await ImageStore.find({});
  }
  res.send(response);
};

module.exports = {
  GetHandler,
};
