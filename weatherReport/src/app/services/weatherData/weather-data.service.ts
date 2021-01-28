import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../../interfaces/weather';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  wUrl: string = 'https://api.openweathermap.org/data/2.5/weather?q=';
  wKey: string = '&units=imperial&APPID=947a2cdc5ec42c0021585c5219f59a90';
  
  wData: any = {};

  constructor(private http: HttpClient) { }

  // Returns weather data
  getWeather = (loc: string): Observable<Weather> => this.wData = this.http.get<Weather>(`${this.wUrl}${loc}${this.wKey}`);
}
