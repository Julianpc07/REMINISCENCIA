import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajesMasterPageRoutingModule } from './personajes-master-routing.module';

import { PersonajesMasterPage } from './personajes-master.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajesMasterPageRoutingModule
  ],
  declarations: [PersonajesMasterPage]
})
export class PersonajesMasterPageModule {}
