const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  favorites: {
    type: [
      {
        type: ObjectId,
        ref: "Pokemon",
      },
    ],
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
