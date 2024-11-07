import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajesMasterPage } from './personajes-master.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajesMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajesMasterPageRoutingModule {}
