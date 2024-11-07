import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Ocultar la barra de estado
      StatusBar.hide();
    });
  }
}    