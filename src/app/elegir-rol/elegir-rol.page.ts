import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-elegir-rol',
  templateUrl: './elegir-rol.page.html',
  styleUrls: ['./elegir-rol.page.scss'],
})
export class ElegirRolPage {

  constructor(private navCtrl: NavController) {}

  Login() {
    this.navCtrl.navigateForward('/login');
  }

}
