const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "user"
  },
  isBlocked: {
    type: Boolean,
    default: false
  }
});

module.exports =
  mongoose.models.User || mongoose.model("User", userSchema);