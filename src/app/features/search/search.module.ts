import {NgModule} from '@angular/core';
import {SearchRoutingModule} from './search-routing.module';
import {SearchComponent} from './search.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MyServiceModule} from '../../services/my-services.module';
import {MyStoreModule} from '../../store/my-store.module';
import {CardComponent} from './card/card.component';

@NgModule({
  declarations: [
    SearchComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    MyServiceModule,
    MyStoreModule,
  ]
})
export class SearchModule {
}
