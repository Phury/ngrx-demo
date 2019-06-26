import {Component, OnInit} from '@angular/core';
import {CardService} from '../../services/card.service';
import {Card} from '../../model/card.model';
import {Observable} from 'rxjs';


const DEFAULT_SEARCH = 's:war t:planeswalker';

@Component({
  selector: 'mtg-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  cardQuery = DEFAULT_SEARCH;
  cards$: Observable<Card[]>;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.triggerSearch();
  }

  triggerSearch() {
    this.cards$ = this.cardService.search(this.cardQuery);
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      console.log(this.cardQuery);
      this.triggerSearch();
    }
  }
}
