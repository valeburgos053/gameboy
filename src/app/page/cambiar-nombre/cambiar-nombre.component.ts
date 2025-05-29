import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cambiar-nombre',
  imports: [],
  templateUrl: './cambiar-nombre.component.html',
  styleUrl: './cambiar-nombre.component.scss'
})
export class CambiarNombreComponent {
    usuarioService = inject(UsuarioService);
    cambiarNombre(nuevoNombre: string) {
      this.usuarioService.nombre.set(nuevoNombre);

    }
}
