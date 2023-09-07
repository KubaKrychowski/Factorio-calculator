import { RecipeModel } from './../../shared/interfaces/recipes/recipe.model';
import { ItemIngredientModel } from './../../shared/interfaces/recipes/item-ingredient.model';
import { Injectable } from '@angular/core';
import { FinalProductForRecipeModel } from '../../shared/interfaces/items/final-product-for-recipe.model';

@Injectable()
export class CreateRecipeService {
  public finalProduct: FinalProductForRecipeModel | null = null;

  private recipe: RecipeModel;

  constructor() {
    this.recipe = {
      ingredients: []

    }
  }

  public addIngredient(ingredient: ItemIngredientModel) {
    this.recipe.ingredients.push(ingredient);
  }

  public getIngredients(): ItemIngredientModel[] {
    return this.recipe.ingredients;
  }

  public getRecipe(): RecipeModel {
    return this.recipe;
  }

  public fetchRecipe(recipe: RecipeModel): void {
    this.recipe = recipe;
  }
}
