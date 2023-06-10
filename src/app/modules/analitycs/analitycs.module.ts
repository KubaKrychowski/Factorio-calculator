import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalitycsComponent } from './components/analitycs/analitycs.component';
import { AnalitycsRoutingModule } from './analitycs-routing.module';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    AnalitycsComponent
  ],
  imports: [
    CommonModule,
    AnalitycsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AnalitycsModule { }
