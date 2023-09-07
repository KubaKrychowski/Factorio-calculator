import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    LeftMenuComponent
  ],
})

export class LeftMenuModule { }
