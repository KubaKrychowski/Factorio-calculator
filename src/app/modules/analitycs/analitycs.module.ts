import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalitycsComponent } from './components/analitycs/analitycs.component';
import { AnalitycsRoutingModule } from './analitycs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AnalyticsTableComponent } from './components/analytics-table/analytics-table.component';
import { TableModule } from 'src/app/layout/table/table.module';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartsService } from './services/charts.service';
import { ItemService } from '../shared/services/item.service';



@NgModule({
  declarations: [
    AnalitycsComponent,
    AnalyticsTableComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    AnalitycsRoutingModule,
    MaterialModule,
    SharedModule,
    TableModule
  ],
  providers: [
    ChartsService,
    ItemService
  ]
})
export class AnalitycsModule { }
