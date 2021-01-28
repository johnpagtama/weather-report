import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../../interfaces/forecast';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastDataService {
  fUrl: string = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  fKey: string = '&units=imperial&APPID=947a2cdc5ec42c0021585c5219f59a90';

  fData: any = {};

  constructor(private http: HttpClient) { }

  // Returns forecast data
  getForecast = (loc: string): Observable<Forecast> => this.fData = this.http.get<Forecast>(`${this.fUrl}${loc}${this.fKey}`);
}
