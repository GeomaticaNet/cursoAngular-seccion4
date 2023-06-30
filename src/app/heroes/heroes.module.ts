import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';



@NgModule({
    // exports, no solo para componentes, sino para otros modulos, etc.
    exports: [
        HeroComponent,
        ListComponent,
    ],
    declarations: [
        HeroComponent,
        ListComponent,
    ],
    imports:[
        CommonModule
    ]

})
export class HeroesModule { }
