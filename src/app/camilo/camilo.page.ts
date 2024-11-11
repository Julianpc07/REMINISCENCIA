import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-camilo',
  templateUrl: './camilo.page.html',
  styleUrls: ['./camilo.page.scss'],
})
export class CamiloPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  caracteristicas() {
    this.navCtrl.navigateForward('/caracteristicas');
  }
}
