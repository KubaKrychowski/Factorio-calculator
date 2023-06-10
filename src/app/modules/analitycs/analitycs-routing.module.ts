import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalitycsComponent } from './components/analitycs/analitycs.component';
import { AnalyticsPages } from './enums/analytics-pages.enum';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalitycsRoutingModule { }
