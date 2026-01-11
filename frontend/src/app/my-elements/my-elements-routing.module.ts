import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyElementsPage } from './my-elements.page';

const routes: Routes = [
  {
    path: '',
    component: MyElementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyElementsPageRoutingModule {}
