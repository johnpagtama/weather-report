import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../../interfaces/forecast';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastDataService {
  fUrl: string = ``;
  fKey: string = ``;

  fData: any = {};

  constructor(private http: HttpClient) { }

  // Returns forecast data
  getForecast = (loc: string): Observable<Forecast> => this.fData = this.http.get<Forecast>(`${this.fUrl}${loc}${this.fKey}`);
}
