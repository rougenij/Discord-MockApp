const User = require("../model/User");

const addUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err.message);
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
    res.send({ status: "success" });
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

module.exports = { addUser, logIn, logOut };
