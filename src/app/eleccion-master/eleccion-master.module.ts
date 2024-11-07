import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EleccionMasterPageRoutingModule } from './eleccion-master-routing.module';

import { EleccionMasterPage } from './eleccion-master.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EleccionMasterPageRoutingModule
  ],
  declarations: [EleccionMasterPage]
})
export class EleccionMasterPageModule {}
