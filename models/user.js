const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username required']
    },
    email: {
      type: String,
      required: [true, 'Email required']
    },
    password: {
      type: String,
      required: [true, 'password required']
    }
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
