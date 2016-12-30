import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WeatherListComponent } from './weather/weather-list.component';
import { WeatherItemComponent } from "./weather/weather-item.component";
import { WeatherSearchComponent } from "./weather/weather-search.component";
import { WeatherService } from "./weather/weather.service";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherItemComponent,
    WeatherSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
