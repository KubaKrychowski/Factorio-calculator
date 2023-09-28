import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { sharedReducer } from './store/shared.reducer';
import { ItemCategoryPipe } from './pipes/item-category.pipe';
import { PowerCostPipe } from './pipes/power-cost.pipe';
import { HealthPipe } from './pipes/health.pipe';
import { EfficiencyPipe } from './pipes/efficiency.pipe';
import { PolutionPipe } from './pipes/polution.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './components/chart/chart.component';
import { DialogOpenerComponent } from './components/dialog-opener/dialog-opener.component';
import { ItemPickerComponent } from './components/item-picker/item-picker.component';
import { MaterialModule } from '../material/material.module';

const MODULES = [
  TranslateModule,
  FormsModule
]

const PIPES = [
  ItemCategoryPipe,
  PowerCostPipe,
  HealthPipe,
  EfficiencyPipe,
  PolutionPipe,
]

const COMPONENTS = [
  ChartComponent,
  ItemPickerComponent
]

@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS,
    DialogOpenerComponent,
    ItemPickerComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('Shared', [sharedReducer]),
    MODULES,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ...MODULES,
    ...PIPES,
    COMPONENTS
  ]
})

export class SharedModule { }
