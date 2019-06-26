import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutWithMenuComponent } from './layout-with-menu/layout-with-menu.component';

@NgModule({
    imports: [
      RouterModule.forChild([]),
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
export class ComponentsModule {
}
