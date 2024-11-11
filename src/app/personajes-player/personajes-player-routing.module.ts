import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajesPlayerPage } from './personajes-player.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajesPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajesPlayerPageRoutingModule {}
