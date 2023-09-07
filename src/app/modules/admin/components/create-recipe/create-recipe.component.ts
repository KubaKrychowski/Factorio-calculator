import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateModel } from 'src/app/app-state.model';
import { ItemModel } from 'src/app/modules/shared/interfaces/items/item.model';
import { selectAllItems } from 'src/app/modules/shared/store/shared.selectors';
import { CreateRecipeService } from '../../services/create-recipe.service';
import { ItemIngredientModel } from 'src/app/modules/shared/interfaces/recipes/item-ingredient.model';
import { NotificationService } from 'src/app/core/notification-service/notification.service';
import { RecipeModel } from 'src/app/modules/shared/interfaces/recipes/recipe.model';
import { FinalProductForRecipeModel } from 'src/app/modules/shared/interfaces/items/final-product-for-recipe.model';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent {
  public items: Observable<ItemModel[]>;
  public displayedColumns: string[] = ['name', 'amount'];
  public columnsTranslations: string[] = ['RECIPE.INGREDIENT_PROPERTIES.NAME', 'RECIPE.INGREDIENT_PROPERTIES.AMOUNT'];
  public addIngredientForm = new FormGroup({
    newItemControl: new FormControl<ItemModel | null>(null, Validators.required),
    newItemAmountControl: new FormControl<number>(0, [Validators.min(1)])
  });

  public get finalProduct(): FinalProductForRecipeModel | undefined {
    if (!this.createRecipeService.finalProduct) {
      return;
    }

    return this.createRecipeService.finalProduct;
  }

  public get recipe(): RecipeModel {
    console.log(this.createRecipeService.getRecipe());
    return this.createRecipeService.getRecipe();
  }

  public get mappedToTableViewIngredientsData() {
    return this.recipe.ingredients.map(ingredient => ({ ...ingredient.item, amount: ingredient.amount }));
  }

  constructor(private readonly store: Store<AppStateModel>, private readonly createRecipeService: CreateRecipeService, private readonly notificationService: NotificationService) {
    this.items = this.store.pipe(select(selectAllItems));
  }

  public addItemToRecipe() {
    if (!this.addIngredientForm.valid) {
      this.addIngredientForm.markAllAsTouched();
      return;
    }

    const ingredient: ItemIngredientModel = {
      item: this.addIngredientForm.controls['newItemControl'].value!,
      amount: this.addIngredientForm.controls['newItemAmountControl'].value!
    };

    this.createRecipeService.addIngredient(ingredient);
    this.notificationService.notifySuccess('NOTIFICATIONS.SUCCESSFULY_ADDED_INGREDIENT');
  }


}
