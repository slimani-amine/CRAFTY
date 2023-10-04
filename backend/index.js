const express = require("express");
const authroute = require("./Routes/authRoute.js");
const resertRroute = require("./Routes/reset-password-routes.js");
const { Server } = require("socket.io");
const app = express();
const PORT = 4000;
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);






app.use(express.json());

app.use(cors());
app.use("/auth", authroute);
app.use("/reset", resertRroute);
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
