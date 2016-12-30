import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather.data';
import { Observable } from 'rxjs/Observable';
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { WeatherItem } from './weather-item';

@Injectable()

export class WeatherService {

	constructor (private _http: Http) {}

	getWeatherItems() {
		return WEATHER_ITEMS;
	}

	addWeatherItem(weatherItem: WeatherItem) {
		WEATHER_ITEMS.push(weatherItem);
	}

	searchWeatherData(cityName: string): Observable<any> {
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=7b8d81341cefe0cb261d120c01074114&units=metric')
			.map(response => response.json())
			.catch(error => {
				console.error(error);
				return Observable.throw(error.json());
			})
	}
}