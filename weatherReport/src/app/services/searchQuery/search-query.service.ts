import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchQueryService {
  private searchQuerySubject$ = new Subject<any>();

  constructor() { }

  // Sends search query
  sendSearchQuery = (cityCountry: string) => this.searchQuerySubject$.next({ location: cityCountry });

  // Returns search query
  getSearchQuery = (): Observable<any> => this.searchQuerySubject$.asObservable();
}
