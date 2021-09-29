const Dog = require("../models/dog");

const getAllDogs = async (req, res) => {
  await Dog.find({})
    .then((response) => {
      const allDogs = response;
      res.status(200).json(allDogs);
    })
    .catch((error) => {
      console.log("Wrong!");
      console.log(error);
    });
};

const getOneDog = async (req, res) => {
  const { id } = req.params;
  await Dog.findById(id)
    .then((response) => {
      const oneDog = response;
      res.status(200).json(oneDog);
    })
    .catch((error) => {
      console.log("Wrong!");
      console.log(error);
    });
};

const createADog = async (req, res) => {
  const data = req.body;
  const newDog = new Dog(data);
  await newDog
    .save()
    .then((response) => {
      const dog = response;
      res.status(200).json(dog);
    })
    .catch((error) => {
      console.log("Wrong!");
      console.log(error);
    });
};

const deleteADog = async (req, res) => {
  const { id } = req.params;
  await Dog.findByIdAndDelete(id)
    .then((response) => {
      const deletedDog = response;
      res.status(200).json(deletedDog);
    })
    .catch((error) => {
      console.log("Wrong!");
      console.log(error);
    });
};

const updateADog = async (req, res) => {
  const { id } = req.params;
  await Dog.findByIdAndUpdate(id, req.body, { new: true })
    .then((result) => {
      const updatedDog = result;
      res.status(200).json(updatedDog);
    })
    .catch((error) => {
      console.log("Wrong!");
      console.log(error);
    });
};

module.exports = {
  getAllDogs,
  getOneDog,
  createADog,
  deleteADog,
  updateADog,
};
