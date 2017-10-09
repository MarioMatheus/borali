import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {
 
  }

  presentProfileOptions() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'My Perfil',
          handler: () => {
            console.log('My Perfil clicked');
          }
        },{
          text: 'Settings',
          handler: () => {
            console.log('Settings clicked');
          }
        },{
          text: 'Log Out',
          handler: () => {
            console.log('Log Out clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
