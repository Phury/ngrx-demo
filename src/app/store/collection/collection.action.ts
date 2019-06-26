import {Action} from '@ngrx/store';
import {Card} from '../../model/card.model';

export enum CollectionActionTypes {
  ADD_CARD = '[Collection] Add card',
  CARD_ADDED = '[Collection] Card added',
}

export class AddCardCommand implements Action {
  readonly type = CollectionActionTypes.ADD_CARD;
  constructor(readonly card: Card) {
  }
}
export class CardAddedEvent implements Action {
  readonly type = CollectionActionTypes.CARD_ADDED;
  constructor(readonly card: Card) {
  }
}

export type CollectionActions = AddCardCommand
  | CardAddedEvent;
