import { createReducer, on } from "@ngrx/store";
import { SharedStateModel } from "../interfaces/store/shared-state.model";
import { FetchItems } from "./shared.actions";

const initialState: SharedStateModel = {
  items: []
}

export const sharedReducer = createReducer(initialState,
  on(FetchItems, (state, { items }) => ({
    ...state,
    items
  })));
