import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'analytics'
  },
  {
    path: 'analytics',
    loadChildren: (() => import('./modules/analitycs/analitycs.module').then(module => module.AnalitycsModule))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
