import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearServidorPageRoutingModule } from './crear-servidor-routing.module';

import { CrearServidorPage } from './crear-servidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearServidorPageRoutingModule
  ],
  declarations: [CrearServidorPage]
})
export class CrearServidorPageModule {}
