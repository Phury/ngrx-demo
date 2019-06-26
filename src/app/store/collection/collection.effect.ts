import {Injectable} from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {CollectionService} from '../../services/collection.service';
import {concatMap, map, tap} from 'rxjs/internal/operators';
import {AddCardCommand, CardAddedEvent, CollectionActionTypes} from './collection.action';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class CollectionEffect {

  constructor(private actions$: Actions,
              private collectionService: CollectionService,
              private toastr: ToastrService) {
  }

  @Effect() addToCollection$ = this.actions$.pipe(
    ofType<AddCardCommand>(CollectionActionTypes.ADD_CARD),
    map(action => action.card),
    concatMap(cardToSave => this.collectionService.addCard(cardToSave).pipe(
      map((addedCard) => new CardAddedEvent(addedCard))
    ))
  );
}
