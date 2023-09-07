import { EfficiencyModel } from "src/app/modules/shared/interfaces/efficiency.model";
import { GetItemRecipeResponseDto } from "./get-item-recipe-response.dto";

export interface GetItemResponseDto {
  id: string;
  name: string;
  categoryId: number;
  stars: number;
  height: number;
  width: number;
  iconUrl: string;
  health: number;
  polution: number;
  powerCost: number;
  efficiency: EfficiencyModel;
  recipes: GetItemRecipeResponseDto[];
}
