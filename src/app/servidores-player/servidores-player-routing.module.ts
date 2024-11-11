import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServidoresPlayerPage } from './servidores-player.page';

const routes: Routes = [
  {
    path: '',
    component: ServidoresPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServidoresPlayerPageRoutingModule {}
