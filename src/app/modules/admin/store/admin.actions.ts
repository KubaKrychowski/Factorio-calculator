import { createAction, props } from "@ngrx/store";
import { ItemModel } from "../../shared/interfaces/items/item.model";

export const fetchFilteredItems = createAction(
  '[AdminModule] Fetch filtered items',
  props<{ filteredItems: ItemModel[] }>()
);
