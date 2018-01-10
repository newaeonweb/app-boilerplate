import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GamesService {
  private url: string;

  constructor(private http: HttpClient) { }

  get() {
    // this.url = 'https://fipe.parallelum.com.br/api/v1/motos/marcas';
    this.url = 'https://api.twitch.tv/kraken/games/top';

    return this.http.get(this.url, {
      headers: new HttpHeaders({'Client-ID': 'mxl119qecihacudeg6lmx6m7cf0yqb'}),
    });

  }

}
