// user controller

const User = require("../models/user.model");
const userValidation = require("../utils/validator");

const userController = {
  // get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // get user by id
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // create new user
  async createUser(req, res) {
    const { error } = userValidation(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    try {
      const user = new User(req.body);
      await user.save();
      res.json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // update user
  async updateUser(req, res) {
    const { error } = userValidation(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    try {
      await User.findByIdAndUpdate(req.params.id, req.body);
      res.json({ message: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // delete user
  async deleteUser(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;
