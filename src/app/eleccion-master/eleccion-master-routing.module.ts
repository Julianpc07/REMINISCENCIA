import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleccionMasterPage } from './eleccion-master.page';

const routes: Routes = [
  {
    path: '',
    component: EleccionMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EleccionMasterPageRoutingModule {}
