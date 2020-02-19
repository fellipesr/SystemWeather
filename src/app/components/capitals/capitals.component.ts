import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Observable, from } from 'rxjs';
import { map, combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-capitals',
  templateUrl: './capitals.component.html',
  styleUrls: ['./capitals.component.css']
})
export class CapitalsComponent implements OnInit {

  cities = ['Rio de Janeiro',
    'São Paulo',
    'Belo Horizonte',
    'Brasília',
    'Belém',
    'Salvador',
    'Curitiba',
    'Fortaleza',
    'Manaus',
    'João Pessoa'];

  weathers = ['45449',
    '45881',
    '44403',
    '43348',
    '44857',
    '43080',
    '44944',
    '43346',
    '42471',
    '34631'
  ];

  weatherCity: any;

  cities$: Observable<any>;

  weather$: Observable<any>;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {

    this.cities$ = from(this.cities).pipe(
      map((city) => this.apiService.getCapitalsName(city)),
      combineAll(),
    )

    this.weather$ = from(this.weathers).pipe(
      map((weather) => this.apiService.getCapitalsWeather(weather)),
      combineAll()
    )

    this.weatherCity = this.weather$.subscribe(data => {
      this.weatherCity = data;
    })
  }
}
