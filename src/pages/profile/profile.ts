import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TravelItineraryPage } from '../travel-itinerary/travel-itinerary';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
    constructor(private navCtrl: NavController) {}

    openItineraries() {
      this.navCtrl.push(TravelItineraryPage)
    }
}