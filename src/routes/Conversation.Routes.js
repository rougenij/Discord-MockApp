const express = require("express");
const {
  addNewConversation,
  getConversation,
} = require("../controllers/Conversation.Controller");

// API ROUTER
const conversationRouter = express.Router();

conversationRouter.post("/conversation", addNewConversation);
conversationRouter.get("/conversation/:userId", getConversation);

module.exports = conversationRouter;
