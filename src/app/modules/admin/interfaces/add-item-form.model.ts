import { FormControl, FormGroup } from "@angular/forms";
import { PowerCostModel } from "../../shared/interfaces/power-cost.model";

export interface AddItemFormModel {
  name: FormControl<string | null>;
  health: FormControl<number | null>;
  powerCost: FormGroup<{
    value: FormControl<number | null>;
    unit: FormGroup<{
      unit: FormControl<string | null>;
      unitPrefix: FormControl<string | null>;
    }>;
  }>;
  efficiency: FormGroup<{
    percentage: FormControl<number | null>;
    valuePerTime: FormGroup<{
      value: FormControl<number | null>;
      timeUnit: FormControl<string | null>;
    }>;
  }>;
  stars: FormControl<number | null>;
  category: FormControl<string | null>;
  height: FormControl<number | null>;
  width: FormControl<number | null>;
  polution: FormGroup<{
    value: FormControl<number | null>;
    timeUnit: FormControl<string | null>;
  }>;
}
