import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajesPlayerPageRoutingModule } from './personajes-player-routing.module';

import { PersonajesPlayerPage } from './personajes-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajesPlayerPageRoutingModule
  ],
  declarations: [PersonajesPlayerPage]
})
export class PersonajesPlayerPageModule {}
