const express = require("express");
const {
  addNewMessage,
  getMessages,
} = require("../controllers/Message.Controller");

// API ROUTER
const messageRouter = express.Router();

messageRouter.post("/message", addNewMessage);
messageRouter.get("/message/:conversationId", getMessages);

module.exports = messageRouter;
