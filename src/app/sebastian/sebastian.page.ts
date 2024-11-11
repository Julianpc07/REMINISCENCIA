import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sebastian',
  templateUrl: './sebastian.page.html',
  styleUrls: ['./sebastian.page.scss'],
})
export class SebastianPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  caracteristicas() {
    this.navCtrl.navigateForward('/caracteristicas');
  }
}
