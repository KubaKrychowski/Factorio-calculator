import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxComponent } from './toolbox.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MyProjectToolboxComponent } from './components/my-project-toolbox/my-project-toolbox.component';
import { AddConnectionDialogComponent } from './components/add-connection-dialog/add-connection-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ToolboxComponent,
    MyProjectToolboxComponent,
    AddConnectionDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ToolboxComponent
  ]
})
export class ToolboxModule { }
