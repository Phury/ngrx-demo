import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Card} from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  cards: Card[] = [];

  constructor() {
  }

  addCard(card: Card): Observable<Card> {
    this.cards.push(card);
    return of(card);
  }
}
