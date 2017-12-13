import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'register-login',
  templateUrl: 'register.html',
})

export class RegisterPage {
  private user          : User;
  public firstPassword  : string;
  public seconPassword  : string;
  
  constructor(
    private afAuth: AngularFireAuth, 
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController) {

    this.user = new User();
  }

  public verifyPassword(): boolean{
    if(this.firstPassword == this.seconPassword){
      this.user._password = this.firstPassword;
      return true
    }
    else{
      this.toastCtrl.create({
          message: `Divergência na senha`,
          duration: 3000
        }).present();
      return false
    }
  }
  
  async register(user: User){
    try{
      if(this.verifyPassword()){
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.getEmail(), this.user.getPassword());
        this.toastCtrl.create({
          message: `Conta criada com sucesso!`,
          duration: 3000
        }).present();
        this.navCtrl.pop();
      }
      
    }
    catch(e){
      console.error(e);
    }
  }

}
