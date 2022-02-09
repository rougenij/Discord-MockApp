const User = require("../model/User");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    if (!allUsers) return res.status(400).send("No Users in the database");
    res.status(200).send(allUsers);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getUserByToken = async (req, res) => {
  try {
    const token = req.params.token;
    const searchedUser = await User.findOne({ token });
    if (!searchedUser) return res.status(400).send("User was not found");
    res.status(200).send(searchedUser);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const addUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    const token = await user.generateAuthToken();
    await user.save();
    res.status(201).send({ status: "success" });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const logIn = async (req, res) => {
  try {
    //findByCredentials - madeup function that has been created at the user model
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const logOut = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
};

const searchforUsers = async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  addUser,
  logIn,
  logOut,
  getUserByToken,
  getAllUsers,
  searchforUsers,
};
