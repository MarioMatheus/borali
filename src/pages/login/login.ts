import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  private user : User;

  constructor(public afAuth: AngularFireAuth, 
    public navCtrl: NavController, public navParams: NavParams) {

  }

  async login(user : User) {
    
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.getEmail(), user.getPassword());
      if(result){
        this.navCtrl.setRoot('HomePage')
      }
    }
    catch(e){
      console.log(e)
    }
    
  }
  
  register() {
    this.navCtrl.push('RegisterPage');
  }

}
