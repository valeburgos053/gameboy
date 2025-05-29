import express from 'express';
import { createServer } from 'node:http';
import { Server, Socket } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server,{cors:{origin:"*"}});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

io.on("connection", (socket) => {
  console.log("Nueva conexion")
  socket.emit("Mensaje desde el backend");
  socket.on("Mensaje custom", () => console.log("Mensaje custom recibido"))
})