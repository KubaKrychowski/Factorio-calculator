import { EfficiencyModel } from "../efficiency.model";

export interface ItemModel {
  id: string;
  name: string;
  categoryId: number;
  width: number;
  height: number;
  stars: number;
  iconUrl: string;
  health: number;
  powerCost?: any;
  efficiency: EfficiencyModel;
  polution?: any;
}
