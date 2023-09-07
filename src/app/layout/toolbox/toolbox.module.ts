import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxComponent } from './toolbox.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MaterialModule } from 'src/app/modules/material/material.module';



@NgModule({
  declarations: [
    ToolboxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ToolboxComponent
  ]
})
export class ToolboxModule { }
