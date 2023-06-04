import { of } from "rxjs";

const MENU_ITEMS = [
  {
    "name": "CRAFTING_TREE",
    "routerLink": "crafting-tree",
    "iconUrl": 'crafting-tree.png'
  },
  {
    "name": "ANALYTICS",
    "routerLink": "analitycs",
    "iconUrl": 'analitycs.png'
  }
];

export const getMenuItems = of(MENU_ITEMS);
