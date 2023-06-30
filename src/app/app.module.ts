import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';


@NgModule({
    declarations: [
        AppComponent,
        HeroComponent,
        ListComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent] // primer componente.
})

// Un módulo es una clase que tiene un decorador.
// El módulo en sí mismo es un agrupador, encapsula una funcionalidad para compartirla y protegerla del mundo exterior.
export class AppModule { }
