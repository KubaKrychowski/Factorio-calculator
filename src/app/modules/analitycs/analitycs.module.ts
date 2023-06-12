import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalitycsComponent } from './components/analitycs/analitycs.component';
import { AnalitycsRoutingModule } from './analitycs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AnalyticsTableComponent } from './components/analytics-table/analytics-table.component';
import { TableModule } from 'src/app/layout/table/table.module';



@NgModule({
  declarations: [
    AnalitycsComponent,
    AnalyticsTableComponent
  ],
  imports: [
    CommonModule,
    AnalitycsRoutingModule,
    MaterialModule,
    SharedModule,
    TableModule
  ]
})
export class AnalitycsModule { }
