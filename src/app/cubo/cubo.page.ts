import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.page.html',
  styleUrls: ['./cubo.page.scss'],
})
export class CuboPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  caracteristicas() {
    this.navCtrl.navigateForward('/caracteristicas');
  }
}
