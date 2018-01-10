import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public items: any [];
  public searchText: string;

  transform(value: any, input: string, args?: any): any [] {
    console.log(input);

    if (input) {
      input = input.toLowerCase();
      return value.filter(function (el: any) {
        console.log(el.game.name);
          return el.game.name.toLowerCase().indexOf(input) > -1;
      });
    }
    return value;
  }

}
