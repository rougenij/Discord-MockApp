const express = require("express");
const router = express.Router();
const UserRouter = require("../routes/User.Routes");
const MessageRouter = require("../routes/Message.Router");
const ConversationRouter = require("../routes/Conversation.Routes");

router.use(UserRouter);
router.use(MessageRouter);
router.use(ConversationRouter);

module.exports = router;
