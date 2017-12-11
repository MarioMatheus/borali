import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { initializeApp } from 'firebase';
import { FIREBASE_CONFIG } from './firebase.config';

import { HomePage } from '../pages/home/home';
//import { PointPage } from '../pages/point/point';
//import { LoginPage } from '../pages/login/login'
//import { PostPage } from '../pages/post/post';
//import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    initializeApp(FIREBASE_CONFIG);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

