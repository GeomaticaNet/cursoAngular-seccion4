import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';



@NgModule({
    declarations: [
        AppComponent,
    ],
    // Si tiene la palabra module va en imports....
    imports: [
        BrowserModule,
        CounterModule,
        HeroesModule,
    ],
    providers: [],
    bootstrap: [AppComponent] // primer componente.
})

// Un módulo es una clase que tiene un decorador.
// El módulo en sí mismo es un agrupador, encapsula una funcionalidad para compartirla y protegerla del mundo exterior.
export class AppModule { }
