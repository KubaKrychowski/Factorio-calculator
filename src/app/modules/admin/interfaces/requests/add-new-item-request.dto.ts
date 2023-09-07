import { RecipeModel } from "src/app/modules/shared/interfaces/recipes/recipe.model";

export interface AddNewItemRequestDto {
  name: string;
  stars: number;
  height: number;
  width: number;
  category: number;
  recipe?: RecipeModel;
}
