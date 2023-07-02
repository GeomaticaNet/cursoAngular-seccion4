import { Component } from '@angular/core';

@Component({
    selector: 'app-dbz-main-page',  // cambiamos el nombre al selector
    templateUrl: './main-page.component.html'   // ponemos el path de la plantilla html
})

// Exportamos nuestro componente hijo
export class MainPageComponent {

    public msg: string = 'Hola desde main-page';



}
