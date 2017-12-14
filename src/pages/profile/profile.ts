import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { TravelItineraryPage } from '../travel-itinerary/travel-itinerary';
import { FollowsPage } from '../follows/follows';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
    constructor(private navCtrl: NavController, private actionSheetCtrl: ActionSheetController) {}

    openItineraries() {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Meus Roteiros',
        buttons: [
          {
            text: 'Fortaleza-Pacajus',
            role: 'Fortaleza-Pacajus',
            handler: () => {
              this.navCtrl.push(TravelItineraryPage)
            }
          }
        ]
      });
      actionSheet.present();
    }

    openFollows() {
      this.navCtrl.push(FollowsPage);
    }

}
