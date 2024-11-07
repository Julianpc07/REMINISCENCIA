import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsMasterPageRoutingModule } from './items-master-routing.module';

import { ItemsMasterPage } from './items-master.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsMasterPageRoutingModule
  ],
  declarations: [ItemsMasterPage]
})
export class ItemsMasterPageModule {}
