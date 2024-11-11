import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateooPage } from './mateoo.page';

const routes: Routes = [
  {
    path: '',
    component: MateooPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateooPageRoutingModule {}
