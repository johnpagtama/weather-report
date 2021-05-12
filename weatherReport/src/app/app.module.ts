import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'; 

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { SearchQueryComponent } from './components/search-query/search-query.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { WeatherMainComponent } from './components/weather-main/weather-main.component';

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent, CityListComponent, SearchQueryComponent, ForecastComponent, WeatherInfoComponent, WeatherMainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent],
})
export class AppModule {}
