// Modulos de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modulos hijos
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';
// App principal
import { AppComponent } from './app.component';



@NgModule({
    declarations: [
        AppComponent,
    ],
    // Si tiene la palabra module va en imports....
    // Aqui van todos los modulos hijos
    imports: [
        BrowserModule,
        CounterModule,
        HeroesModule,
        DbzModule,
    ],
    providers: [],
    bootstrap: [AppComponent] // primer componente.
})

// Un módulo es una clase que tiene un decorador.
// El módulo en sí mismo es un agrupador, encapsula una funcionalidad para compartirla y protegerla del mundo exterior.
export class AppModule { }
