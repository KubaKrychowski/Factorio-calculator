import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { getItemCategories } from 'src/app/core/db/item-categories';
import { getTimeUnits } from 'src/app/core/db/time-units';
import { getUnitPrefixes } from 'src/app/core/db/unit-prefixes';
import { ItemCategoryModel } from 'src/app/modules/shared/interfaces/item-category.model';
import { TimeUnitModel } from 'src/app/modules/shared/interfaces/time-unit.model';
import { UnitPrefixModel } from 'src/app/modules/shared/interfaces/unit-prefix.model';

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

  public addItemForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    health: ['', Validators.required],
    stars: [0, Validators.required],
    category: ['', Validators.required],
    height: [0, Validators.required],
    width: [0, Validators.required],
    polution: this.fb.group({
      value: [0, Validators.required],
      timeUnit: [0, Validators.required]
    }),
    powerCost: this.fb.group({
      value: [0, Validators.required],
      unit: [0, Validators.required],
    }),
    efficiency: this.fb.group({
      percentage: [0, Validators.required],
      efficiency: [0, Validators.required],
      unit: [0, Validators.required]
    }),
  });

  constructor(private fb: FormBuilder) {

  }
  public submitForm() {
    console.log(this.addItemForm.controls);
  }
}
