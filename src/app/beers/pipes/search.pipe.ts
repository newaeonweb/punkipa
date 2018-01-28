import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, searchText: string, args?: any): any [] {
    if (searchText) {
      searchText = searchText.toLowerCase();
      return items.filter((item: any) => item.name.toLowerCase().indexOf(searchText) > -1);
    }
    return items;
  }

}
