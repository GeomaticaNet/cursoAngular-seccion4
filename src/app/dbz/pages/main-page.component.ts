import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',  // cambiamos el nombre al selector
    templateUrl: './main-page.component.html'   // ponemos el path de la plantilla html
})

// Exportamos nuestro componente hijo
export class MainPageComponent {

    public characters: Character[] = [{
        name: 'Krillin',
        power: 1000
    }, {
        name: 'Goku',
        power: 9500
    },{
        name: 'Vegetta',
        power: 7500
    }];

    onNewCharacter(character: Character):void{

        this.characters.push(character);
    }

    onDeleteCharacter(index:number){

        this.characters.splice(index,1);

    }

}
