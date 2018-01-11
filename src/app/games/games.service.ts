import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GamesService {
  private url = 'https://api.twitch.tv/kraken/games/top?limit=';

  constructor(private http: HttpClient) { }

  get(limit: number) {
    return this.http.get(this.url + limit, {
      headers: new HttpHeaders({'Client-ID': 'mxl119qecihacudeg6lmx6m7cf0yqb'}),
    });
  }

}
