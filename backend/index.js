const express = require("express");
const authroute = require("./Routes/authRoute.js");
const resertRroute = require("./Routes/reset-password-routes.js");
const socket_io = require("socket.io");
const http = require('http');
const app = express();
const PORT = 4000;

const cors = require("cors");
app.use(express.json());

app.use(cors());
app.use("/auth", authroute);
app.use("/reset", resertRroute);
const server = http.createServer(app)
const io =  socket_io(server)

const connectedUsers = {}
io.on("connection", (socket) => {
  console.log("Socket ID:", socket.id);

  // Store the user ID when a user connects
  socket.on("setUserID", (userID) => {
    socket.userID = userID;
   
    connectedUsers[userID] = socket;
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.userID);
   
    delete connectedUsers[socket.userID];
  });

  socket.on("privateMessage", ({ recipientID, message }) => {
    console.log("e: index.js:45 ~ socket.on ~ recipientID, message:",recipientID, message)
    const recipientSocket = connectedUsers[recipientID];
    if (recipientSocket) {
      
      recipientSocket.emit("privateMessage", {
        senderID: socket.userID,
        message: message,
      });
    }
  });
  
});

 server.listen(PORT, () => {
  console.log(`listening on port :  ${PORT}`);
});

module.exports = { io }