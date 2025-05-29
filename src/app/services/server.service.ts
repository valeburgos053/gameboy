import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  server = io("localhost:3000", {autoConnect: false});

  constructor() {
    this.server.on("connect", () => {
      console.log("CONECTADO AL BACKEND")
   });
   this.server.onAny(event => console.log("Onany", event));
   this.server.connect();
   this.server.emit("Mensaje custom");
  }
}
