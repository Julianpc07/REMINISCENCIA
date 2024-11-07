import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpcsMasterPage } from './npcs-master.page';

const routes: Routes = [
  {
    path: '',
    component: NpcsMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpcsMasterPageRoutingModule {}
