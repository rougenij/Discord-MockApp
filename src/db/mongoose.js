const mongoose = require("mongoose");
require("dotenv").config();
const password = process.env.PASSWORD;

mongoose.connect(
  `mongodb+srv://rouge:${password}@discord.rkhvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {}
);
