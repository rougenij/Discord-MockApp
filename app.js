const express = require("express");
require("./src/db/mongoose");
const userRouter = require("./src/routes/User.Routes");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", userRouter);

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "client/build");

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is up on port: ${PORT}`);
});
