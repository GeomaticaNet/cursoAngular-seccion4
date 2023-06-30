import { Component } from '@angular/core';

@Component({
    // app-heroes-list
    selector: 'app-heroes-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    public name: string = 'ironman';
    public age: number = 45;


    // Un get es como ejecutar un metodo.
    get capitalizedName(): string {

        return this.name.toUpperCase();
    }

    // publico no privada si no no sale del scope de la clase.
    getHeroDescription(): string {

        return `${ this.name } - ${ this.age }`;

    }


    changeHero():void{
        this.name = 'Spiderman';
    }

    changeAge():void{
        this.age = 25;
    }

    resetForm():void{
        this.name = 'ironman';
        this.age = 45;

        // Esto no funciona porque no se controla por el ciclo de deteccion de cambios de angular
        // document.querySelectorAll('h1')!.forEach(element =>{
        //     element.innerHTML = '<h1>Desde Angular</h1>'
        // })
    }

}
