import { createAction, props } from "@ngrx/store";
import { Pages } from "src/app/modules/shared/enums/pages.enum";

export const setCurrentPage = createAction('[Core] setting current page', props<{ page: Pages }>());
