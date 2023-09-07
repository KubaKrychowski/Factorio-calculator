import { createReducer, on } from "@ngrx/store";
import { AdminStateModel } from "../interfaces/store/admin-state.model";
import { fetchFilteredItems } from "./admin.actions";

const initialState: AdminStateModel = {
  filteredItems: []
}

export const adminReducer = createReducer(initialState,
  on(fetchFilteredItems, (state, { filteredItems }) => ({
    ...state,
    filteredItems
  })))
