const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "'Name' is a required field."],
  },
  email: {
    type: String,
    required: [true, "'Email' is a required field."],
  },
  password: {
    type: String,
    required: [true, "'Password' is a required field."],
  },
});

const User = mongoose.model("user", userSchema);

module.export = User;
