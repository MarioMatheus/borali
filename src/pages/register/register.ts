import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'register-login',
  templateUrl: 'register.html',
})

export class RegisterPage {

  
  private user : User;
  
  constructor(private afAuth: AngularFireAuth, 
    public navCtrl: NavController, public navParams: NavParams) {
    this.user = new User();
  }

  async register(user: User){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.getEmail(), this.user.getPassword());
      this.navCtrl.pop();
    }
    catch(e){
      console.error(e);
    }
  }

}
