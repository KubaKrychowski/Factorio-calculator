import { SharedStateModel } from "src/app/modules/shared/interfaces/store/shared-state.model";
import { CoreStateModel } from "./core/store/interfaces/core-state.model";
import { AdminStateModel } from "./modules/admin/interfaces/store/admin-state.model";

export interface AppStateModel {
  core: CoreStateModel;
  shared: SharedStateModel;
  admin: AdminStateModel;
}
