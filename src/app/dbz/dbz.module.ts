import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';



@NgModule({
    exports: [
        MainPageComponent,
    ],
    declarations: [
        AddCharacterComponent,
        ListComponent,
        MainPageComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class DbzModule { }