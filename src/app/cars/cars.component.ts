import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).foundation();
  }

}
