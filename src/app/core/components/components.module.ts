import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from './pop-up/pop-up.component';


const components = [
    PopUpComponent
];

@NgModule({
    declarations: [
        ...components,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ...components
    ],
})
export class SharedComponentsModule { }
