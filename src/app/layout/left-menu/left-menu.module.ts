import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  declarations: [
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports: [
    LeftMenuComponent
  ]
})

export class LeftMenuModule { }
