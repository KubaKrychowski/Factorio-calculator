import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemCategory'
})
export class ItemCategoryPipe implements PipeTransform {
  private itemCategoryIdsDictionary = [
    { id: 1, name: 'Logistics' },
    { id: 2, name: 'Production' },
    { id: 3, name: 'Products' },
    { id: 4, name: 'Combat' },
    { id: 5, name: 'Signals' },
    { id: 6, name: 'Fluids' },
  ]
  transform(value: number): string {
    return this.itemCategoryIdsDictionary[value].name;
  }

}
