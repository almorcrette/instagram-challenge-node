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

// imgSrcBuilder: function() {
//   return 'data:image/' + this.img.contentType + ';base64,' + this.img.data.toString('base64')
// }

const Perspective = mongoose.model("Perspective", PerspectiveSchema);

module.exports = Perspective;