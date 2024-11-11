import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-mateoo',
  templateUrl: './mateoo.page.html',
  styleUrls: ['./mateoo.page.scss'],
})
export class MateooPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  caracteristicas() {
    this.navCtrl.navigateForward('/caracteristicas');
  }
}
