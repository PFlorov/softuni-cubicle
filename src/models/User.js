const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: [5, "Username is too short!"],
    unique: true,
    validate: /^[a-zA-Z0-9]+$/,
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password too short!"],
    validate: /^[a-zA-Z0-9]+$/,
  },
});

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;

    next();
  });
});

userSchema.method("validatePassword", function (password) {
  return (isValid = bcrypt.compare(password, this.password));
});

const User = mongoose.model("User", userSchema);
module.exports = User;
