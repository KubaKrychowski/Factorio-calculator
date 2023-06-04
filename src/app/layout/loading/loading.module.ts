import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { MaterialsModule } from 'src/app/core/materials/materials.module';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports: [
    LoadingComponent
  ]
})

export class LoadingModule { }
