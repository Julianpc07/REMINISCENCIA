import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-npcs-master',
  templateUrl: './npcs-master.page.html',
  styleUrls: ['./npcs-master.page.scss'],
})
export class NpcsMasterPage  {

  constructor(private navCtrl: NavController) { }

  servidoresMaster() {
    this.navCtrl.navigateForward('/servidores-master');
  }

}
