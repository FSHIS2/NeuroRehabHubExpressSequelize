import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddElementPage } from './add-element.page';

const routes: Routes = [
  {
    path: '',
    component: AddElementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddElementPageRoutingModule {}
