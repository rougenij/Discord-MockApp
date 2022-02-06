const express = require("express");
const auth = require("../middleware/auth");
const { addUser, logIn, logOut } = require("../controllers/User.Controllers");

// API ROUTER
const userRouter = express.Router();

userRouter.post("/users", addUser);
userRouter.post("/users/login", logIn);
userRouter.post("/users/logout", auth, logOut);

module.exports = userRouter;
