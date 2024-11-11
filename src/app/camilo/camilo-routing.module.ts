import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamiloPage } from './camilo.page';

const routes: Routes = [
  {
    path: '',
    component: CamiloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamiloPageRoutingModule {}
