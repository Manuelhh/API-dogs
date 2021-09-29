const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    default: "Mixed",
  },
  age: {
    type: Number,
    default: 0,
  },
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
