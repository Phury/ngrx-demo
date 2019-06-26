import {NgModule} from '@angular/core';
import {ComponentsModule} from '../../components/components.module';
import {SearchRoutingModule} from './search-routing.module';
import {SearchComponent} from './search.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SearchRoutingModule,
    FormsModule,
  ]
})
export class SearchModule {
}
