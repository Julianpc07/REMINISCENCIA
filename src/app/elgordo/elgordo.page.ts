import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-elgordo',
  templateUrl: './elgordo.page.html',
  styleUrls: ['./elgordo.page.scss'],
})
export class ElgordoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  caracteristicas() {
    this.navCtrl.navigateForward('/caracteristicas');
  }

}
