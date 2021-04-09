import { Component, OnInit } from '@angular/core';
import { CurrentLocationService } from '../../services/currentLocation/current-location.service';
import { WeatherDataService } from '../../services/weatherData/weather-data.service';
import { CurrentLocation } from '../../interfaces/current-location';
import { Weather } from '../../interfaces/weather';
import { Forecast } from '../../interfaces/forecast';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  private currentLoc: CurrentLocation;
  private weather: Weather;
  
  public forecast: Forecast[] = [];
  public queryList: object[] = [];
  
  constructor(private weatherData: WeatherDataService, private currentLocData: CurrentLocationService) { }
  
  ngOnInit(): void {   
    // Default city
    // Uncomment later
    // this.getCurrentWeather();
  }
  
  getCurrentWeather = () =>
    // Gets current location
    this.currentLocData.getCurrentLocation().subscribe((res) => {
      this.currentLoc = { city: res.city, country: res.country };
      
      let loc: string = `${this.currentLoc.city},${this.currentLoc.country}`;
      
      console.log(loc); // Delete later
      
      // Gets weather based on current location
      this.getWeather(loc);
    }, err => console.error(err));
    
  getWeather = (loc: string) => {
    
    // console.log(this.queryList); // Delete later
    
    this.weatherData.getWeather(loc).subscribe((res) => {
      this.weather = {
        city: res[0].city,
        country: res[0].country,
        desc: res[0].desc,
        humidity: res[0].humidity,
        icon: res[0].icon,
        pressure: res[0].pressure,
        // Gets sunrise in 12 hour format based on user locale
        sunrise: `${new Date(+res[0].sunrise * 1000).toLocaleString(window.navigator['userLanguage'] || (navigator.languages && navigator.languages.length && navigator.languages[0]) || navigator.language || window.navigator['browserLanguage']  || window.navigator['systemLanguage'] || 'en', { hour: 'numeric', minute: 'numeric', hour12: true })}`,
        // Gets sunset in 12 hour format based on user locale
        sunset: `${new Date(+res[0].sunset * 1000).toLocaleString(window.navigator['userLanguage']  || (navigator.languages && navigator.languages.length && navigator.languages[0]) || navigator.language || window.navigator['browserLanguage'] || window.navigator['systemLanguage'] || 'en', { hour: 'numeric', minute: 'numeric', hour12: true })}`,
        temp: res[0].temp,
        temp_max: res[0].temp_max,
        temp_min: res[0].temp_min,
        visibility: res[0].visibility,
        wind_direction: res[0].wind_direction,
        wind_speed: res[0].wind_speed
      }
      
      // Adds forecast data to forecast array
      this.forecast.push(...res[1].map((i: any) => ({ date: i.date, day: i.day, desc: i.desc, icon: i.icon, temp: i.temp })));
      
      // Adds query to query list
      this.queryList.push({ weather: this.weather }, { forecast: this.forecast });
      
      console.log(this.queryList);
    }, err => console.error(err));
  }
}