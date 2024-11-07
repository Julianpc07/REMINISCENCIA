import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServidoresMasterPageRoutingModule } from './servidores-master-routing.module';

import { ServidoresMasterPage } from './servidores-master.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServidoresMasterPageRoutingModule
  ],
  declarations: [ServidoresMasterPage]
})
export class ServidoresMasterPageModule {}
