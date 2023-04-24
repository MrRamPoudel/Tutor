const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const tutorStatus = {}; // Store the online status of tutors

io.on("connection", (socket) => {
   //when user gets to the website
   console.log(`User Connected: ${socket.id}`);
    
   socket.on("disconnect", () =>{
       console.log("User disconnected", socket.id);
       if (socket.tutorId && socket.studentId == socket.tutorId) {
        setTimeout(() => {
            // Check if the tutor is still offline
            if (!tutorStatus[socket.tutorId]) {
              tutorStatus[socket.tutorId] = false;
              io.emit("tutorStatusUpdate", { tutorId: socket.tutorId, isOnline: false });
              console.log(`User ${socket.id} disconnected with room id ${socket.tutorId}`);
            }
          }, 5000); // Set the timeout to 5 seconds or any desired value
      }
   });

   //Check when user joins the room
   socket.on("roomID", (data) => {
       const { tutorId, studentId } = data;
       socket.join(tutorId);
       socket.tutorId = tutorId;
       socket.studentId = studentId;

       if(tutorId == studentId) {
        tutorStatus[tutorId] = true;
        io.emit("tutorStatusUpdate", { tutorId, isOnline: true });
       }
       
       console.log(`User ${socket.id} connected with room id ${tutorId}`);
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