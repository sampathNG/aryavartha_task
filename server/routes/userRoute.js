const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  forgotPasswords,
  forgotPassword,
  resetPassword,
} = require("../controller/userController");
const authAdmin = require("../utils/authorization");
const auth = require("../utils/authentication");
router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/users", getUsers);
router.get("/users/:id", auth, getUserById);
router.put("/users/:id", auth, updateUser);
router.delete("/users", deleteUser);
router.post("/forget", auth, resetPassword);
router.post("/forget", auth, forgotPasswords);
router.post("/forget", auth, forgotPassword);
module.exports = router;
