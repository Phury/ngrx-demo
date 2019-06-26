import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {collectionReducer} from './collection/collection.reducer';
import {CollectionEffect} from './collection/collection.effect';
import {StoreModule} from '@ngrx/store';

@NgModule({
  imports: [
    StoreModule.forFeature('mtg', {
      collection: collectionReducer,
    }),
    EffectsModule.forFeature([
      CollectionEffect,
    ]),
  ],
  declarations: [],
  exports: [],
})
export class MyStoreModule {
}
