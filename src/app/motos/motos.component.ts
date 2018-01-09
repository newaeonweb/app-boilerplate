import { Component, OnInit } from '@angular/core';
import { MotosService } from './motos.service';

declare var $: any;

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.scss']
})
export class MotosComponent implements OnInit {

  constructor(private motosService: MotosService) { }

  public getMotos () {

    return this.motosService.get().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log('Something went wrong!' + JSON.stringify(err));
      }
    );
  }

  ngOnInit() {
    $(document).foundation();
    this.getMotos();
  }

}
