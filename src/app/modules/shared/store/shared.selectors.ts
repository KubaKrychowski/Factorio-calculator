import { createSelector } from "@ngrx/store";
import { AppStateModel } from "src/app/app-state.model";

const selectSharedState = (state: AppStateModel) => state.shared;

export const selectAllItems = createSelector(selectSharedState, (state => state?.items));
