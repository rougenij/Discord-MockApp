const mongoose = require("mongoose");
const password = process.env.PASSWORD;
console.log(password);

mongoose.connect(
  `mongodb+srv://rouge:${password}@discord.rkhvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {}
);
