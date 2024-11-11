import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateooPageRoutingModule } from './mateoo-routing.module';

import { MateooPage } from './mateoo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MateooPageRoutingModule
  ],
  declarations: [MateooPage]
})
export class MateooPageModule {}
