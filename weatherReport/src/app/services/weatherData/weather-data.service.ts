import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../../interfaces/weather';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  wUrl: string = ``;
  wKey: string = ``;
  
  wData: any = {};

  constructor(private http: HttpClient) { }

  // Returns weather data
  getWeather = (loc: string): Observable<Weather> => this.wData = this.http.get<Weather>(`${this.wUrl}${loc}${this.wKey}`);
}
