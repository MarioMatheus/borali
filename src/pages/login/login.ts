import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  private username: String;
  private password: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  private validate(): boolean {
    if(this.username==="mario@matheus" && this.password==="admin"){
      return true;
    }
    return false;
  }

  goToFeed() {
    if(this.validate()){
      this.navCtrl.setRoot(HomePage);
    }
  }

}
