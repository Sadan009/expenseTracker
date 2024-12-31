const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, length: 20 },
  password: { type: String, require: true, length: 20 },
  email: { type: String, require: true, unique: true },
});

module.exports = mongoose.model("User", userSchema);
