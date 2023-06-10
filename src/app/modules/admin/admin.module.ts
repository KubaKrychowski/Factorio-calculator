import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { AddItemDialogComponent } from './components/add-item-dialog/add-item-dialog.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DashboardComponent,
    AddItemDialogComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    TranslateModule
  ]
})
export class AdminModule { }
