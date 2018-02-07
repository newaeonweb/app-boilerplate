import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MotosService {
  private url: string;

  constructor(private http: HttpClient) { }

  get() {
    this.url = 'https://fipe.parallelum.com.br/api/v1/motos/marcas';

    return this.http.get(this.url);

  }

}
