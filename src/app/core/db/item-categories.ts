import { of } from "rxjs";

const ITEM_CATEGORIES = [
  {
    id: 1,
    name: 'Logistics',
  },
  {
    id: 2,
    name: 'Production'
  },
  {
    id: 3,
    name: 'Products'
  },
  {
    id: 4,
    name: 'Combat'
  }
];

export const getItemCategories = of(ITEM_CATEGORIES);
