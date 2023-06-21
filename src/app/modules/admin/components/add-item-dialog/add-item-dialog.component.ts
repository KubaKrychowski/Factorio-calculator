import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Observable, Subscription, finalize, first, take, tap } from 'rxjs';
import { getIconsIndexes } from 'src/app/core/db/icons-indexes';
import { getItemCategories } from 'src/app/core/db/item-categories';
import { getTimeUnits } from 'src/app/core/db/time-units';
import { getUnitPrefixes } from 'src/app/core/db/unit-prefixes';
import { ItemCategoryModel } from 'src/app/modules/shared/interfaces/item-category.model';
import { TimeUnitModel } from 'src/app/modules/shared/interfaces/time-unit.model';
import { UnitPrefixModel } from 'src/app/modules/shared/interfaces/unit-prefix.model';
import { ItemIconsViewModel } from '../../interfaces/item-icons-view.model';
import { IconCategoryType } from 'src/app/modules/shared/types/icon-category.type';
import { Unsubscriber } from 'src/app/modules/shared/interfaces/unsubscriber';

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
  public iconsIndexes: Observable<Map<string, string[]>> = getIconsIndexes;
  public itemIconsVm: ItemIconsViewModel = {
    items: [],
    structures: [],
    weapons: []
  }

  public addItemForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    health: ['', Validators.required],
    stars: [0, Validators.required],
    category: ['', Validators.required],
    height: [0, Validators.required],
    width: [0, Validators.required],
    polution: this.fb.group({
      value: [0, Validators.required],
      unit: [1, Validators.required]
    }),
    powerCost: this.fb.group({
      value: [0, Validators.required],
      unit: [1, Validators.required],
    }),
    efficiency: this.fb.group({
      percentage: [0, Validators.required],
      efficiency: [0, Validators.required],
      unit: [1, Validators.required]
    }),
  });

  constructor(private readonly fb: FormBuilder) {
    this.iconsIndexes.pipe(
      first(),
      take(1),
      tap(res => {
        for (const [key, value] of res) {
          this.itemIconsVm[key as IconCategoryType] = value;
        }
      }),
    ).subscribe();
  }

  public submitForm() {
    for (const [key, value] of Object.entries(this.addItemForm.controls)) {
      console.log({ key, value: value.value });
    }
  }

  public selectIcon(icon: string, category: IconCategoryType) {

  }
}
