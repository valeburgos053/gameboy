import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-jugar',
  imports: [RouterModule],
  templateUrl: './jugar.component.html',
  styleUrl: './jugar.component.scss'
})
export class JugarComponent {

  serverService = inject(ServerService);
  constructor() {
    const args = {
      publica: true,
      nombre: "Text"
    }
   this.serverService.server.emitWithAck("crearSala").then(res => {

  })
}

}
