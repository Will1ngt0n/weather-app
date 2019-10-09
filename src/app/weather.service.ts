import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  city = "Pretoria"
  AppID = "&APPID=13e0cbb2f2cede6f03e901ab6f8f53e8"
  constructor(public http : HttpClient) { }

  getWeather(city){
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+ city + this.AppID)
  }
}

