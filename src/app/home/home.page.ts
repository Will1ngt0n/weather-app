import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  getWeather
  weather
  temperature
  humidity
  pressure
  description
  city
  displayedCity
  backgroundImage
  constructor(public weatherService : WeatherService) {
    
  }

  getCurrentWeather(event){
    //console.log(event);
    this.city = event.detail.value
    console.log(this.city);
    
    this.weatherService.getWeather(this.city).subscribe((data) => {
      console.log(data);
      this.weather = data
      //this.temperature.weather[0]
      // if(this.weather.error.message === "city not found"){
      //   //console.log(this.weather.error);
        
      //   this.description = null
      //   this.humidity = null
      //   this.pressure = null
      //   this.temperature = null
      // }else if(this.weather.main){
      

        this.displayedCity = this.weather.name
        console.log(this.weather.weather[0].description);
        this.description = (this.weather.weather[0].description)
        this.humidity = this.weather.main.humidity
        this.pressure = this.weather.main.pressure
        this.temperature = String(Math.round(this.weather.main.temp - 273.25))
        console.log(this.weather.main.temp);

        if(this.description === "scattered clouds"){
          this.backgroundImage = ""
        }
        if(this.description === "overcast clouds"){
          this.backgroundImage = ""
        }
        if(this.description === "light rain"){
          this.backgroundImage = ""
        }
        if(this.description === "heavy rain"){
          this.backgroundImage = ""
        }
        if(this.description === "clear sky"){
          this.backgroundImage = "src\\assets\\background\\clear-sky.jpg"
        }
      //}
    })
  }
}
