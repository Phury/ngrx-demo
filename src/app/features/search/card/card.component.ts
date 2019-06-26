import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Card} from '../../../model/card.model';
import {AddCardCommand} from '../../../store/collection/collection.action';

@Component({
  selector: 'mtg-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
  }

  addToCollection(card) {
    this.store.dispatch(new AddCardCommand(card));
  }

}
