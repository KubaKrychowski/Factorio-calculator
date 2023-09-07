import { Pipe, PipeTransform } from '@angular/core';
import { EfficiencyModel } from '../interfaces/efficiency.model';

@Pipe({
  name: 'efficiency'
})
export class EfficiencyPipe implements PipeTransform {

  transform(efficiency: EfficiencyModel): string {
    if (!efficiency || !efficiency.efficiencyPerMinute || !efficiency.efficiencyPerMinute) {
      return 'GENERAL.UNDEFINED';
    }

    return `${efficiency.efficiencyPercentage} % | ${efficiency.efficiencyPerMinute}/min`;
  }
}
