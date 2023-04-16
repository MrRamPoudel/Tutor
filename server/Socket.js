const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
   //when user gets to the website
   console.log(`User Connected: ${socket.id}`);
    
   socket.on("disconnect", () =>{
       console.log("User disconnected", socket.id);
   });

   //Check when user joins the room
   socket.on("roomID", (roomID) => {
       socket.join(roomID);
       console.log(`User ${socket.id} connected with room id ${roomID}`);

   });

   //When user sends message to that room
   socket.on("sendMessage", (data) =>{
       socket.to(data.roomID).emit("receiveMsg", data);
   })
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});