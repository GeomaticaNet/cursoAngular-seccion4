// CLASE CON UN DECORADOR QUE DEFINE EL APP-ROOT, ESTE SERIA EL COMPONENTE PRINCIPAL DE LA APP DEL CUAL SE DESPRENDEN TODOS LOS DEMAS COMPONENTES.

import { Component } from '@angular/core';

// decorador
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	public title: string = 'Hola Componente root';

}
