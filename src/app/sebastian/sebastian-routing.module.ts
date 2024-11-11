import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SebastianPage } from './sebastian.page';

const routes: Routes = [
  {
    path: '',
    component: SebastianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SebastianPageRoutingModule {}
