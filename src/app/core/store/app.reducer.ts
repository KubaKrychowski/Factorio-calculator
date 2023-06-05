import { Pages } from "src/app/modules/shared/enums/pages.enum";
import { AppStateModel } from "./interfaces/app-state.model";
import { createReducer, on } from "@ngrx/store";
import { setCurrentPage } from "./app.actions";

export const initialState: AppStateModel = {
  Core: {
    currentPage: Pages.ANALITYCS
  }
}

export const appReducer = createReducer(
  initialState,
  on(setCurrentPage, (state, { page: currentPage }) => ({
    ...state,
    currentPage,
  }))
)
