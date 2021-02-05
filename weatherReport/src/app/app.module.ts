import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { SearchQueryComponent } from './components/search-query/search-query.component';
import { ForecastComponent } from './components/forecast/forecast.component';

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent, CityListComponent, SearchQueryComponent, ForecastComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
