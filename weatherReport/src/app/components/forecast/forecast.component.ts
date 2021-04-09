import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  days: any[] = [
    { day1: 'Day 1', day2: 'Day 2', day3: 'Day 3', day4: 'Day 4', day5: 'Day 5' },
    { icon1: 'Icon 1', icon2: 'Icon 2', icon3: 'Icon 3', icon4: 'Icon 4', icon5: 'Icon 5' },
    { desc1: 'Desc 1', desc2: 'Desc 2', desc3: 'Desc 3', desc4: 'Desc 4', desc5: 'Desc 5'},
    { temp1: 'Temp 1', temp2: 'Temp 2', temp3: 'Temp 3', temp4: 'Temp 4', temp5: 'Temp 5'}
  ];
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
