import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElgordoPageRoutingModule } from './elgordo-routing.module';

import { ElgordoPage } from './elgordo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElgordoPageRoutingModule
  ],
  declarations: [ElgordoPage]
})
export class ElgordoPageModule {}
