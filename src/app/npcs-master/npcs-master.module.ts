import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NpcsMasterPageRoutingModule } from './npcs-master-routing.module';

import { NpcsMasterPage } from './npcs-master.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NpcsMasterPageRoutingModule
  ],
  declarations: [NpcsMasterPage]
})
export class NpcsMasterPageModule {}
