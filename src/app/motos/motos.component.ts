import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.scss']
})
export class MotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).foundation();
  }

}
