import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-info',
  templateUrl: './forecast-info.component.html',
  styleUrls: ['./forecast-info.component.scss']
})
export class ForecastInfoComponent implements OnInit {
  days: any[] = [
    { day: 'Day 1', icon: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'sunny', temp: '82' },
    { day: 'Day 2', icon: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'cloudy', temp: '69' },
    { day: 'Day 3', icon: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'sunny', temp: '82' },
    { day: 'Day 4', icon: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'cloudy', temp: '69' },
    { day: 'Day 5', icon: 'https://material.angular.io/assets/img/examples/shiba2.jpg', desc: 'sunny', temp: '82' },
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
