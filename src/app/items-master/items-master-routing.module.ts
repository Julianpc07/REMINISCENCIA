import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsMasterPage } from './items-master.page';

const routes: Routes = [
  {
    path: '',
    component: ItemsMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsMasterPageRoutingModule {}
