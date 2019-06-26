import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Card} from '../../model/card.model';
import {getCardCollection, getMtgState} from '../../store/collection/collection.selectors';



@Component({
  selector: 'mtg-collection',
  templateUrl: './collection.component.html'
})
export class CollectionComponent implements OnInit {

  collection$: Observable<Card[]>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.collection$ = this.store.select(state => {
      return getCardCollection(getMtgState(state));
    });
  }

}
