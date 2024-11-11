import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SebastianPageRoutingModule } from './sebastian-routing.module';

import { SebastianPage } from './sebastian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SebastianPageRoutingModule
  ],
  declarations: [SebastianPage]
})
export class SebastianPageModule {}
