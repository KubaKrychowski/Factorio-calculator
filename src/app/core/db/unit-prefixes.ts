import { of } from "rxjs";

const UNIT_PREFIXES = [
  {
    label: 'm',
    multiplier: 0.001
  },
  {
    label: 'c',
    multiplier: 0.01
  },
  {
    label: 'd',
    multiplier: 0.1,
  },
  {
    label: 'none',
    multiplier: 1
  },
  {
    label: 'h',
    multiplier: 100
  },
  {
    label: 'k',
    multiplier: 1000
  },
  {
    label: 'M',
    multiplier: 1000000
  },
  {
    label: 'G',
    multiplier: 1000000000
  }
];

export const getUnitPrefixes = of(UNIT_PREFIXES);
