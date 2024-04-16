const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");

// get all users
router.get("/", userController.getAllUsers);

// get user by id
router.get("/:id", userController.getUserById);

// create new user
router.post("/add", userController.createUser);

// update user
router.put("/:id", userController.updateUser);

// delete user
router.delete("/:id", userController.deleteUser);


module.exports = router;
