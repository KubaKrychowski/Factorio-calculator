import { createAction, props } from "@ngrx/store";
import { ItemModel } from "../interfaces/items/item.model";

export const FetchItems = createAction(
  '[SharedModule] Fetch items data',
  props<{ items: ItemModel[] }>()
);
