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
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './components/chart/chart.component';

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
]

@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('Shared', [sharedReducer]),
    MODULES
  ],
  exports: [
    ...MODULES,
    ...PIPES,
    COMPONENTS
  ]
})

export class SharedModule { }
