import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JugarComponent } from './pages/jugar/jugar.component';
import { CambiarNombreComponent } from './page/cambiar-nombre/cambiar-nombre.component';

export const routes: Routes = [

    {
        path: "",
        component: HomeComponent
    },
    {
        path: "jugar",
        component: JugarComponent
    },
    {
        path: "cambiar-nombre",
        component: CambiarNombreComponent
    }
];
