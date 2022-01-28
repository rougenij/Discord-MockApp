const express = require("express");
const { addUser } = require("../controllers/User.Controllers");

// API ROUTER
const userRouter = express.Router();

userRouter.post("/users", addUser);

module.exports = userRouter;
