import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-items-master',
  templateUrl: './items-master.page.html',
  styleUrls: ['./items-master.page.scss'],
})
export class ItemsMasterPage {

  constructor(private navCtrl: NavController) { }

  npcsMaster() {
    this.navCtrl.navigateForward('/npcs-master');
  }

}
