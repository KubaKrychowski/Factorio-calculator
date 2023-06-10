import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

const MODULES = [
  TranslateModule
]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class SharedModule { }
