const Message = require("../model/Message");

//Add new Message
const addNewMessage = async (req, res) => {
  try {
    const newMessage = await new Message(req.body);
    const savedMessage = await newMessage.save();
    res.status(200).send(savedMessage);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//Get Messages of a User
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).send(messages);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { addNewMessage, getMessages };
