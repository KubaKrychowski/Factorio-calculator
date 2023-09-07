import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, first, tap, finalize } from 'rxjs';
import { getItemCategories } from 'src/app/core/db/item-categories';
import { getTimeUnits } from 'src/app/core/db/time-units';
import { getUnitPrefixes } from 'src/app/core/db/unit-prefixes';
import { ItemCategoryModel } from 'src/app/modules/shared/interfaces/item-category.model';
import { TimeUnitModel } from 'src/app/modules/shared/interfaces/time-unit.model';
import { UnitPrefixModel } from 'src/app/modules/shared/interfaces/unit-prefix.model';
import { NotificationService } from 'src/app/core/notification-service/notification.service';
import { AddNewItemRequestDto } from '../../interfaces/requests/add-new-item-request.dto';
import { AdminService } from '../../services/admin.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddItemDialogDataType } from '../../types/add-item-dialog-data.type';
import { ItemModel } from 'src/app/modules/shared/interfaces/items/item.model';
import { AppService } from 'src/app/core/app-service/app.service';
import { CreateRecipeService } from '../../services/create-recipe.service';
import { FinalProductForRecipeModel } from 'src/app/modules/shared/interfaces/items/final-product-for-recipe.model';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddItemDialogComponent {
  public categories: Observable<ItemCategoryModel[]> = getItemCategories;
  public timeUnits: Observable<TimeUnitModel[]> = getTimeUnits;
  public unitPrefixes: Observable<UnitPrefixModel[]> = getUnitPrefixes;
  public selectedStep: number = 0;
  public addItemForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    health: [null],
    stars: [0, Validators.required],
    category: [null, Validators.required],
    height: [null],
    width: [null],
    polution: this.fb.group({
      value: [null],
      unit: [null]
    }),
    powerCost: this.fb.group({
      value: [null],
      unit: [null],
    }),
    efficiency: this.fb.group({
      percentage: [null],
      efficiency: [null],
      unit: [null]
    }),
  });

  public selectedIconUrl: string | null = null;

  public get isEditMode() {
    return !!this.dialogData?.selectedItem
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly notificationService: NotificationService,
    private readonly adminService: AdminService,
    private readonly appService: AppService,
    private readonly createRecipeService: CreateRecipeService,
    @Inject(MAT_DIALOG_DATA) private readonly dialogData: AddItemDialogDataType) {
    if (this.isEditMode) {
      this.fillForm(dialogData.selectedItem);
      this.createRecipeService.finalProduct = dialogData.selectedItem;
    }
  }

  public submitForm() {
    this.appService.loading = true;
    this.addItemForm.markAllAsTouched();

    console.log(this.addItemForm);

    if (!this.addItemForm.valid) {
      this.notificationService.notifyError();
      this.appService.loading = false;
      return;
    }

    const recipe = this.createRecipeService.getRecipe();

    console.log(recipe);

    const request: AddNewItemRequestDto = {
      name: this.addItemForm.controls['name'].value,
      stars: this.addItemForm.controls['stars'].value,
      height: this.addItemForm.controls['height'].value,
      width: this.addItemForm.controls['width'].value,
      category: this.addItemForm.controls['category'].value,
      recipe,
    }

    this.adminService.addNewItem(request)
      .pipe(
        first(),
        tap(() => this.notificationService.notifySuccess()),
        finalize(() => this.appService.loading = false)
      )
      .subscribe();
  }

  public goForward() {
    this.createRecipeService.finalProduct = this.mapFormToRecipeFinalProduct();
    this.selectedStep = 1;
  }

  public goBack() {
    this.selectedStep = 0;
  }

  private fillForm(item: ItemModel) {
    this.addItemForm.patchValue(item);
    this.selectedIconUrl = item.iconUrl;
  }

  private mapFormToRecipeFinalProduct(): FinalProductForRecipeModel {
    return {
      name: this.addItemForm.controls['name'].value,
      iconUrl: this.selectedIconUrl,
    }
  }
}
