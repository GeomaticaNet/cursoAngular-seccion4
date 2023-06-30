// modulo: agrupador el cual voy a tener la definicion de mis componentes

import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    declarations:[
        CounterComponent
    ],
    exports:[
        // El mundo exterior puede consumir este componente
        CounterComponent
    ]
})
export class CounterModule{

}
