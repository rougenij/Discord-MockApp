const express = require("express");
const auth = require("../middleware/auth");
const {
  addUser,
  logIn,
  logOut,
  getUserByID,
  getAllUsers,
} = require("../controllers/User.Controllers");

// API ROUTER
const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.get("/users/:userid", getUserByID);

userRouter.post("/users", addUser);
userRouter.post("/users/login", logIn);
userRouter.post("/users/logout", auth, logOut);

module.exports = userRouter;
