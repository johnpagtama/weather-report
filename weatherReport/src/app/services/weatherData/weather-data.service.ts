import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../../interfaces/weather';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private weatherUrl: string = 'http://localhost:4000/api/router/weather/';
  
  constructor(private http: HttpClient) { }
  // Returns weather data
  getWeather = (loc: string): Observable<Weather> => this.http.get<Weather>(`${this.weatherUrl}${loc}`);
}