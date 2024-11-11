import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElgordoPage } from './elgordo.page';

const routes: Routes = [
  {
    path: '',
    component: ElgordoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElgordoPageRoutingModule {}
