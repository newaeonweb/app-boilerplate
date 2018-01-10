import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';

declare var $: any;

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public gamesList: Object;
  public searchText: string;

  constructor(private gamesService: GamesService) { }

  public getGames () {

    return this.gamesService.get().subscribe(
      data => {
        this.gamesList = data;
        console.log(data);
      },
      err => {
        console.log('Something went wrong!' + JSON.stringify(err));
      }
    );
  }

  ngOnInit() {
    this.getGames();
  }

}
