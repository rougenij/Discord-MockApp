const User = require("../model/User");

const addUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send(user, token);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { addUser };
