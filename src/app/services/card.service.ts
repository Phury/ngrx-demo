import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Card} from '../model/card.model';
import {map} from 'rxjs/internal/operators';

const BASE_URL = 'https://api.scryfall.com';
const CARDS_SEARCH_URL = BASE_URL + '/cards/search';

class SearchResponse {
  data: Card[];
}

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private httpClient: HttpClient) {
  }

  search(query: string): Observable<Card[]> {
    if (query) {
      return this.httpClient.get<SearchResponse>(CARDS_SEARCH_URL, {params: {q: query}}).pipe(
        map(({data}) => data)
      );
    } else {
      return of([]);
    }
  }
}
