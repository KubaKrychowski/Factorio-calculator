import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'polution'
})
export class PolutionPipe implements PipeTransform {

  transform(polution: number): string {
    if (!polution) {
      return 'GENERAL.UNDEFINED';
    }

    return `${polution}/min`;
  }

}
