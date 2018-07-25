import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messageCount: Number;
  temparature: Number; 

  constructor(private weatherService: WeatherService ) { }

  ngOnInit() {
     this.weatherService.getWeather().subscribe((weather)=>{
      this.temparature = (weather.main.temp-273.15)* 1.8 + 32;
    });
  }

  updateMessageCount(e){
    this.messageCount = e;
  }

}
