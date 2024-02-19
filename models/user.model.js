// user model

const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
  },
  telnomer: {
    type: String,
    required: true,
  },
  coin: {
    type: String,
    required: true,
  },
  vaqti: {
    type: String,
    required: true,
  },
});

module.exports = model("User", userSchema);
