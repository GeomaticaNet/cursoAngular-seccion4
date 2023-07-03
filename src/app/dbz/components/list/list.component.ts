import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {

    // Input define que lis.component PUEDE RECIBIR una property llamada characterList
    @Input()
    public characterList: Character[] = [{
        name: 'Trunk',
        power: 10
    }]

    @Output()
    public onDelete: EventEmitter<number> = new EventEmitter();


    onDeleteCharacter(index: number): void {
        // TODO: Emitir el id del personaje
        this.onDelete.emit(index);
    }

}
