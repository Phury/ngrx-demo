import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CollectionRoutingModule} from './collection-routing.module';
import {CollectionComponent} from './collection.component';
import {MyServiceModule} from '../../services/my-services.module';
import {MyStoreModule} from '../../store/my-store.module';
import {CardComponent} from './card/card.component';

@NgModule({
  declarations: [
    CollectionComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    MyServiceModule,
    MyStoreModule,
  ]
})
export class CollectionModule {
}
