import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  url:string = "http://api.openweathermap.org/data/2.5/weather?zip=560002,in&appid=4c0d9402daa2da0af1af90a091e2d35a";

  getWeather():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
