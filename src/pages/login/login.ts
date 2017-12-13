import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

import { RegisterPage } from '../../pages/register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  private user : User;

  constructor(public afAuth: AngularFireAuth, 
    public navCtrl: NavController, public navParams: NavParams) {
    this.user = new User();
  }

  async login() {
    
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(this.user.getEmail(), this.user.getPassword());
      if(result){
        this.navCtrl.setRoot(HomePage);
      }
    }
    catch(e){
      console.log(e)
    }
    
  }
  
  register() {
    this.navCtrl.push(RegisterPage);
  }

}
