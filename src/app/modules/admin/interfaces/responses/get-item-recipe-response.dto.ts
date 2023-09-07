import { ItemIngredientModel } from "src/app/modules/shared/interfaces/recipes/item-ingredient.model";

export interface GetItemRecipeResponseDto {
  externalId: string;
  ingredients: ItemIngredientModel[];
  productionTime: number;
}
