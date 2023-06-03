import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalitycsComponent } from './components/analitycs/analitycs.component';
import { AnalitycsRoutingModule } from './analitycs-routing.module';



@NgModule({
  declarations: [
    AnalitycsComponent
  ],
  imports: [
    CommonModule,
    AnalitycsRoutingModule
  ]
})
export class AnalitycsModule { }
