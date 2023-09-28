import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalitycsComponent } from './components/analitycs/analitycs.component';
import { AnalyticsPages } from './enums/analytics-pages.enum';
import { DialogOpenerComponent } from '../shared/components/dialog-opener/dialog-opener.component';
import { AddConnectionDialogComponent } from 'src/app/layout/toolbox/components/add-connection-dialog/add-connection-dialog.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'table'
  },
  {
    path: 'table',
    component: AnalitycsComponent,
    data: { tabIndex: AnalyticsPages.TABLE }
  },
  {
    path: 'charts',
    component: AnalitycsComponent,
    data: { tabIndex: AnalyticsPages.CHARTS }
  },
  {
    path: 'planer',
    component: DialogOpenerComponent,
    data: { component: AddConnectionDialogComponent }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalitycsRoutingModule { }
