const User = require("../models/user.model");
const { TanlanganKompyuter, validateTanlanganKompyuter } = require("../utils/validator");

const userController = {
  // get all users
  async getAllUsers(req, res) {
    try {
      const users = await TanlanganKompyuter.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // get user by id
  async getUserById(req, res) {
    try {
      const user = await TanlanganKompyuter.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // create new user
  async createUser(req, res) {
    const { error } = validateTanlanganKompyuter(req.body);

    console.log(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    try {
      const kompyuter = new TanlanganKompyuter(req.body);
      await kompyuter.save();
      res.json({ message: "Kompyuter created successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // update user
  async updateUser(req, res) {
    const { error } = validateTanlanganKompyuter(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    try {
      await TanlanganKompyuter.findByIdAndUpdate(req.params.id, req.body);
      res.json({ message: "Kompyuter updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // delete user
  async deleteUser(req, res) {
    try {
      await TanlanganKompyuter.findByIdAndDelete(req.params.id);
      res.json({ message: "Kompyuter deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;

