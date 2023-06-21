import { of } from "rxjs";

const ITEM_CATEGORIES = [
  {
    id: 1,
    name: 'Logistics',
    iconUrl: 'logistics.png'
  },
  {
    id: 2,
    name: 'Production',
    iconUrl: 'production.png'
  },
  {
    id: 3,
    name: 'Products',
    iconUrl: 'intermediate-products.png'
  },
  {
    id: 4,
    name: 'Combat',
    iconUrl: 'military.png'
  },
  {
    id: 5,
    name: 'Signals',
    iconUrl: 'signals.png'
  },
  {
    id: 6,
    name: 'Fluids',
    iconUrl: 'fluids.png'
  }
];

export const getItemCategories = of(ITEM_CATEGORIES);
