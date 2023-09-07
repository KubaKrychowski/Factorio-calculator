import { createSelector } from "@ngrx/store";
import { AppStateModel } from "src/app/app-state.model";

const selectAdminState = (state: AppStateModel) => state.admin;
const selectAppState = (state: AppStateModel) => state;

export const selectFilteredItems = createSelector(selectAppState, (state) => state.admin.filteredItems);
export const selectState = createSelector(selectAppState, (state) => state);
export const selectAdminStates = createSelector(selectAdminState, (state) => state);
