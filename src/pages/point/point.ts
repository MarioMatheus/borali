import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Point } from '../../models/point';

@Component({
  selector: 'page-point',
  templateUrl: 'point.html'
})

export class PointPage {

  private _point: Point;

    constructor(public navParams: NavParams) {
      this._point = this.navParams.get('point');
      console.log(this._point);
    }

}