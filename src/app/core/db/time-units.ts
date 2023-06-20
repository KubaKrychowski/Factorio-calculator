import { of } from "rxjs";

const TIME_UNITS = [
  {
    label: 's',
    multiplier: 1
  },
  {
    label: 'm',
    multiplier: 60
  },
  {
    label: 'h',
    multiplier: 3600,
  },
];

export const getTimeUnits = of(TIME_UNITS);
