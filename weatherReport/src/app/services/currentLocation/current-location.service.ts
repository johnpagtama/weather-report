import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentLocation } from '../../interfaces/current-location';

@Injectable({
  providedIn: 'root',
})
export class CurrentLocationService {
  ipUrl: string = 'https://geo.ipify.org/api/v1?apiKey=at_26EFIZpcZtTu7pknW8mwBTcAd2vxw';

  ipData: any = {};

  constructor(private http: HttpClient) {}

  // Returns current location
  getCurrentLocation = (): Promise<CurrentLocation> => this.ipData = this.http.get<CurrentLocation>(this.ipUrl).toPromise();
}
