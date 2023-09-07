import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerCost'
})
export class PowerCostPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) {
      return 'GENERAL.UNDEFINED';
    }
    if (value >= 1e9) {
      return (value / 1e9).toFixed(2) + ' GW';
    } else if (value >= 1e6) {
      return (value / 1e6).toFixed(2) + ' MW';
    } else if (value >= 1e3) {
      return (value / 1e3).toFixed(2) + ' KW'
    } else {
      return value.toFixed(2) + ' W';
    }
  }
}
