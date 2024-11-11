import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServidoresPlayerPageRoutingModule } from './servidores-player-routing.module';

import { ServidoresPlayerPage } from './servidores-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServidoresPlayerPageRoutingModule
  ],
  declarations: [ServidoresPlayerPage]
})
export class ServidoresPlayerPageModule {}
