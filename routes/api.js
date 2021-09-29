var express = require("express");
var router = express.Router();
const dogController = require("../controllers/dogs");

router.get("/all_dogs", dogController.getAllDogs);
router.get("/:id", dogController.getOneDog);
router.post("/create_a_dog", dogController.createADog);
router.put("/:id", dogController.updateADog);
router.delete("/:id", dogController.deleteADog);

module.exports = router;
