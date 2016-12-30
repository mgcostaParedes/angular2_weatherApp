import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WeatherService } from './weather.service';
import { WeatherItem } from './weather-item';

@Component({
	selector: 'weather-search',
	templateUrl: './weather-search.component.html',
	styleUrls: ['../../assets/css/weather-search.css']
})

export class WeatherSearchComponent {
	
	constructor (private _weatherService: WeatherService) {}

	onSubmit(form: FormGroup) {
		this._weatherService.searchWeatherData(form.value.location)
			.subscribe(
				data =>  {
					const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
					this._weatherService.addWeatherItem(weatherItem);
				}
			);
	}
}