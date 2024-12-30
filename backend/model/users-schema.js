const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, require: true, length: 20 },
  password: { type: String, require: true, length: 20 },
  //   age: { type: Number, require: true },
});

const User = mongoose.model("User", userSchema);

module.exports = { User }
