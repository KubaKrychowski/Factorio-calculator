import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { AddItemDialogComponent } from './components/add-item-dialog/add-item-dialog.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AdminService } from "./services/admin.service";
import { ItemService } from "../shared/services/item.service";
import { StoreModule } from "@ngrx/store";
import { sharedReducer } from "../shared/store/shared.reducer";
import { adminReducer } from "./store/admin.reducer";
import { ItemPreviewComponent } from './components/item-preview/item-preview.component';
import { SharedModule } from "../shared/shared.module";
import { TestComponent } from './components/test/test.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { CreateRecipeService } from "./services/create-recipe.service";
import { TableModule } from "src/app/layout/table/table.module";

@NgModule({
  declarations: [
    DashboardComponent,
    AddItemDialogComponent,
    ItemPreviewComponent,
    TestComponent,
    CreateRecipeComponent,
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    TranslateModule,
    StoreModule.forFeature('shared', sharedReducer),
    StoreModule.forFeature('admin', adminReducer),
    SharedModule,
    TableModule
  ],
  providers: [
    AdminService,
    ItemService,
    CreateRecipeService
  ]
})
export class AdminModule { }
