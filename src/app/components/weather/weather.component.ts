import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public city: any;
  public weather: any;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) { }

  ngOnInit() {

    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToWeather(formValues) {
    this.city = this.apiService.getCity(formValues.location).subscribe(data => {
      this.city = data;
      if (this.city) {
        let weatherCity = this.city[0].Key;
        this.weather = this.apiService.getWeather(weatherCity).subscribe(data => {
          this.weather = data;
        });
      }
    });
  }
}