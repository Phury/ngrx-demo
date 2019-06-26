import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { LayoutWithMenuComponent } from './layout-with-menu/layout-with-menu.component';

@NgModule({
    imports: [
      RouterModule.forChild([]),
      CommonModule,
    ],
    declarations: [
        LayoutWithMenuComponent
    ],
    exports: [
      LayoutWithMenuComponent
    ],
    entryComponents: [
    ]
})
export class MyComponentsModule {
}
