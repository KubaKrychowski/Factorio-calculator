import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule
  ],
  exports: [
    LeftMenuComponent
  ]
})

export class LeftMenuModule { }
