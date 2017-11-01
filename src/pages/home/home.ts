import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

import { Point } from '../../models/point';
import { PointPage } from '../point/point';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private _feed: Array<Point>;

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {
    this._feed = [];
    this.searchPoints();
  }

  private searchPoints() {
    //search in database
    var point = new Point("./assets/img/estatua-iracema.jpg", 'Estátua de Iracema');
    point.setDescription('Localizada em algum canto é muito legal para se ver eu acho, ou não.');
    this.addToFeed(point);
    var point2 = new Point("./assets/img/beach-park.jpg", 'Beach Park');
    point2.setDescription('Beach Park é um complexo turístico do litoral do Nordeste do Brasil, na praia...');
    this.addToFeed(point2);
  }

  public presentPointPage(point: Point) {
    console.log(point);
    this.navCtrl.push(PointPage, { point, ctrl: this.navCtrl });
  }

  public addToFeed(point: Point) {
    this._feed.push(point);
  }

  // Apresenta as opções da aplicacao
  public presentProfileOptions() {
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
