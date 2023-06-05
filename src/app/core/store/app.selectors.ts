import { createSelector } from '@ngrx/store';
import { AppStateModel } from './interfaces/app-state.model';

const selectCoreState = (state: AppStateModel) => state.Core;

export const selectCurrentPage = createSelector(
  selectCoreState,
  (state) => state.currentPage
);
