import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalitycsComponent } from './components/analitycs/analitycs.component';

const routes: Routes = [
  {
    path: '',
    component: AnalitycsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalitycsRoutingModule { }
