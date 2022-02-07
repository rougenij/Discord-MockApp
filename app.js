require("./src/db/mongoose");
const http = require("http");
const express = require("express");
const Router = require("./src/routes/Index.Routes");
const cors = require("cors");
const path = require("path");
const socketio = require("socket.io");
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(express.json());
app.use("/api", Router);

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "client/build");

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

io.on("connection", () => {
  console.log("New WebSocket connection");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

server.listen(PORT, () => {
  console.log(`Server is up on port: ${PORT}`);
});
