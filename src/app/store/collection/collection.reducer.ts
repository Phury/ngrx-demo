import {Card} from '../../model/card.model';
import {CollectionActions, CollectionActionTypes} from './collection.action';

const initialState: Card[] = [];

export function collectionReducer(state = initialState, action: CollectionActions): Card[] {
  switch (action.type) {
    case CollectionActionTypes.CARD_ADDED:
      return [...state, action.card];
    default:
      return state;
  }
}
