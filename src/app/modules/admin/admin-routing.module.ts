import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouteDataModel } from '../shared/interfaces/route-data.model';
import { RouterActions } from '../shared/enums/router-actions.enum';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: 'add-new-item',
    component: DashboardComponent,
    data: {
      routeAction: RouterActions.ADD_ITEM
    } as RouteDataModel
  },
  {
    path: 'edit-item/:itemId',
    component: DashboardComponent,
    data: {
      routeAction: RouterActions.EDIT_ITEM
    } as RouteDataModel
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
