import express from 'express';
import { createServer } from 'node:http';
import { Server, Socket } from 'socket.io';
import { Sala } from './classes/sala';

const app = express();
const server = createServer(app);
const io = new Server(server,{cors:{origin:"*"}});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

let salas:Sala[] = [];
let idProximaSala = 0;

io.on("connection", (socket) => {
  console.log("Nueva conexion")

  socket.on("encontrarSala", (callback) => buscarSalaPublica(callback))
  
})

function buscarSalaPublica(callback: Function){
  //console.log("Buscando sala pública")
  const salaDisponible = salas.find(sala => {
    if(!sala.publica) return false;
    if(sala.jugadores[0].nombre && sala.jugadores[1].nombre) return false;
    return true
  })
  callback(salaDisponible ? salaDisponible.id : null);
}