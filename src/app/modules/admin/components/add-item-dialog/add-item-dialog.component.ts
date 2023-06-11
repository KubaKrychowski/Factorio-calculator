import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.scss']
})
export class AddItemDialogComponent {
  public addItemForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    health: ['', Validators.required],
    stars: [0, Validators.required],
    category: ['', Validators.required],
    height: [0, Validators.required],
    width: [0, Validators.required],
    polution: this.fb.group({
      value: [0, Validators.required],
      timeUnit: ['', Validators.required]
    }),
    powerCost: this.fb.group({
      value: [0, Validators.required],
      unit: this.fb.group({
        unit: ['', Validators.required],
        unitPrefix: ['', Validators.required]
      })
    }),
    efficiency: this.fb.group({
      percentage: [0, Validators.required],
      valuePerTime: this.fb.group({
        value: [0, Validators.required],
        timeUnit: ['', Validators.required]
      })
    }),
  });

  constructor(private fb: FormBuilder) {

  }
  public submitForm() {
    console.log(this.addItemForm.controls);
  }
}