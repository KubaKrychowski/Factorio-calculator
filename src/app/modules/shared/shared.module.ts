import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SuffixDirective } from './directives/suffix.directive';

const MODULES = [
  TranslateModule
]

@NgModule({
  declarations: [

  
    SuffixDirective
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
