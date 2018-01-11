import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public gamesList: Object;
  public searchText: string;
  public selectedFilter: string;

  constructor(private gamesService: GamesService) { }

  public getGames () {
    return this.gamesService.get(50).subscribe(
      data => {
        this.gamesList = data['top'];
        console.log(data['top']);
      },
      err => {
        console.log('Something went wrong!' + JSON.stringify(err));
      }
    );
  }

  public filterProperty(property: string): void {
    this.selectedFilter = property;
  }

  public removeFilter(): void {
    this.selectedFilter = undefined;
  }

  ngOnInit() {
    this.getGames();
  }

}
