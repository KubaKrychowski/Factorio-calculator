import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'health'
})
export class HealthPipe implements PipeTransform {

  transform(value: number): string {
    return value ? `${value} HP` : 'GENERAL.UNDEFINED';
  }

}
