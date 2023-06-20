import { UnitPrefixModel } from "./unit-prefix.model";

export interface SIUnitModel {
  unit: 'W' | 'm',
  unitPrefix: UnitPrefixModel
}
