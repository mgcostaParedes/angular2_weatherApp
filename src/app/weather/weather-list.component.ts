import { Component, OnInit } from '@angular/core';
import { WeatherItem } from './weather-item';
import { WEATHER_ITEMS } from './weather.data';
import { WeatherService } from './weather.service';

@Component({
	selector: 'weather-list',
	templateUrl: './weather-list.component.html',
	styleUrls: ['../../assets/css/app.component.css'],
	providers: [WeatherService]
})

export class WeatherListComponent implements OnInit {
	weatherItems: WeatherItem[];

	constructor(private _weatherService: WeatherService) {}

	ngOnInit():any {
		this.weatherItems = WEATHER_ITEMS;
	}
}