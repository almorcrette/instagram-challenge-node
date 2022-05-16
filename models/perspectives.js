const mongoose = require("mongoose");

const PerspectiveSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img:
  {
    data: Buffer,
    contentType: String
  }
});

const Perspective = mongoose.model("Perspective", PerspectiveSchema);

module.exports = Perspective;