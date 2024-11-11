import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-personajes-player',
  templateUrl: './personajes-player.page.html',
  styleUrls: ['./personajes-player.page.scss'],
})
export class PersonajesPlayerPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  caracteristicas() {
    this.navCtrl.navigateForward('/caracteristicas');
  }

}
