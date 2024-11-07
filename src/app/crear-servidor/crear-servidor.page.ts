import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-crear-servidor',
  templateUrl: './crear-servidor.page.html',
  styleUrls: ['./crear-servidor.page.scss'],
})
export class CrearServidorPage  {

  constructor(private navCtrl: NavController) { }

  PersonajesMaster () {
    this.navCtrl.navigateForward('/personajes-master');
  }

}
