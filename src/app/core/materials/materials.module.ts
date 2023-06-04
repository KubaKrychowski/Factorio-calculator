import { NgModule } from "@angular/core";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
  ],
  imports: [
    MatProgressSpinnerModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ]
})

export class MaterialsModule { }
