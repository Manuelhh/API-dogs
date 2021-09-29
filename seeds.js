const mongoose = require("mongoose");
const Dog = require("./models/dog");

require("./config/database");

const d = new Dog({
  name: "Tenor",
  breed: "Golden",
  age: 15,
});

d.save()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
