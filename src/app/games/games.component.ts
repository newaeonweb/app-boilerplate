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
  public requestError: any;

  constructor(private gamesService: GamesService) { }

  public filterProperty(property: string): void {
    this.selectedFilter = property;
  }

  public removeFilter(): void {
    this.selectedFilter = undefined;
  }

  public getGames () {
    return this.gamesService.get(50).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }

  protected handleResponse (response: any) {
    return this.gamesList = response['top'];
  }

  protected handleError (error: any) {
    console.log(error);
    return this.requestError = error;
  }

  ngOnInit() {
    this.getGames();
  }

}
