import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_KEY } from '../utils/apikey';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getCity(location) {
    return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${location}`);
  }

  getWeather(weatherCityId) {
    return this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${weatherCityId}?apikey=${API_KEY}&metric=true&details=true&language=pt-br`);
  }

  public getCapitalsName(capitalsId): Observable<any> {
    return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${capitalsId}`);
  }

  getCapitalsWeather(WeatherId): Observable<any> {
    return this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${WeatherId}?apikey=${API_KEY}&metric=true&details=true&language=pt-br`);
  }

}
