import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentLocation } from '../../interfaces/current-location';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentLocationService {
  private ipUrl: string = 'http://localhost:4000/api/router/weather/';
  
  constructor(private http: HttpClient) {}
  // Returns current location
  getCurrentLocation = (): Observable<CurrentLocation> => this.http.get<CurrentLocation>(this.ipUrl);
}