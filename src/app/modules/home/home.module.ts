import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PatchNotesDialogComponent } from './components/patch-notes-dialog/patch-notes-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [LandingPageComponent, PatchNotesDialogComponent]
})
export class HomeModule { }
