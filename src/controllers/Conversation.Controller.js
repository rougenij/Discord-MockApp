const Conversation = require("../model/Conversation");

//New Conversation
const addNewConversation = async (req, res) => {
  try {
    if (!req.body.senderId || !req.body.receiverId) {
      return res.status(400).send("Users are missing");
    }
    const newConversation = await new Conversation({
      members: [req.body.senderId, req.body.receiverId],
    });
    const savedConversation = await newConversation.save();
    res.status(200).send(savedConversation);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//Get Conversation of a User
const getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).send(conversation);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { addNewConversation, getConversation };
