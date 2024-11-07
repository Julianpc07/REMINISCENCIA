import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearServidorPage } from './crear-servidor.page';

const routes: Routes = [
  {
    path: '',
    component: CrearServidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearServidorPageRoutingModule {}
