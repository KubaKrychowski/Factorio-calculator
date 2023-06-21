import { of } from "rxjs";

const ICONS_INDEXES = new Map<string, string[]>();

// TODO: Add rest of icons

ICONS_INDEXES.set('items', [
  'advanced-circuit',
  'artillery-turret',
  'automation-science-pack',
  'battery-equipment'
]);

ICONS_INDEXES.set('structures', [
  'accumulator',
  'arthmetic-combinator',
  'assembling-machine-1',
  'assembling-machine-2',
  'assembling-machine-3',
]);

ICONS_INDEXES.set('weapons', [
  'artillery-shell',
  'artillery-wagon',
  'atomic-bomb',
  'cannon-shell',
  'car'
]);

export const getIconsIndexes = of(ICONS_INDEXES);
