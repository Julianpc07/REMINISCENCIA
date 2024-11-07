import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServidoresMasterPage } from './servidores-master.page';

const routes: Routes = [
  {
    path: '',
    component: ServidoresMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServidoresMasterPageRoutingModule {}
