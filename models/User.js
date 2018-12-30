const mongoose = require("mongoose");
const { Schema } = mongoose;

//Create Schema
const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
    require: false
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("users", userSchema);
