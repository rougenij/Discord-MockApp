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

const getUserByID = async (req, res) => {
  try {
    const id = req.params.userid;
    const searchedUser = await User.find({ id });
    if (!searchedUser) return res.status(400).send("User was not found");
    res.status(200).send(searchedUser);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const addUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ status: "success" });
  } catch (err) {
    res.status(400).send({ status: "failed" });
  }
};

const logIn = async (req, res) => {
  try {
    console.log(req.body.email, req.body.password);
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ status: "success", id: user._id });
  } catch (e) {
    res.status(400).send({ status: "failed" });
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

module.exports = { addUser, logIn, logOut, getUserByID, getAllUsers };
