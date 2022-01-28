const express = require("express");
const User = require("../model/User");

const addUser = async (req, res) => {
  try {
    const user = await new userModel(req.body);
    await user.save();
    res
      .status(201)
      .send({ status: "success", message: "User has been created" });
  } catch (err) {
    res
      .status(400)
      .send({ status: "failed", message: "Failed to create user" });
  }
};

module.exports = { addUser };
