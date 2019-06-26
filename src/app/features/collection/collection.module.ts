import {NgModule} from '@angular/core';
import {ComponentsModule} from '../../components/components.module';
import {CollectionRoutingModule} from './collection-routing.module';
import {CollectionComponent} from './collection.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CollectionComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    CollectionRoutingModule,
  ]
})
export class CollectionModule {
}
