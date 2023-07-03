import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';



// El decorador Injectable le dice a angular que esto es un servicio, y usa un providein root para que no se use en providers en la app ppal, sino que va a servir para toda la aplicación.

@Injectable({
    providedIn: 'root'
})
export class DbzService {



    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    }, {
        id: uuid(),
        name: 'Goku',
        power: 9500
    }, {
        id: uuid(),
        name: 'Vegetta',
        power: 7500
    }];




    addCharacter(character: Character): void {

        const newCharacter: Character = { ...character, id: uuid() };

        this.characters.push(newCharacter);
    }

    //onDeleteCharacter(index: number) {

    //  this.characters.splice(index, 1);
    deleteCharacterById(id: string) {

        this.characters = this.characters.filter(character => character.id !== id);


    }

}
