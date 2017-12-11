import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PointPage } from '../pages/point/point';
import { PostPage } from '../pages/post/post';
import { ProfilePage } from '../pages/profile/profile';
import { TravelItineraryPage } from '../pages/travel-itinerary/travel-itinerary';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PointPage,
    PostPage,
    ProfilePage,
    TravelItineraryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PointPage,
    PostPage,
    ProfilePage,
    TravelItineraryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Crop,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
