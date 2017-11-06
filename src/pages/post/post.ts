import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

//To use of camera and storage in firebase
import { storage, initializeApp } from 'firebase';
//import { FIREBASE_CONFIG } from '../../app/firebase.config';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { Point } from '../../models/point';


@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})

export class PostPage {

  private _image: any;
  private _titlePoint: String;
  private _description: String;

  constructor(public camera: Camera, public navCtrl: NavController, public loadingCtrl: LoadingController) {
      //initializeApp(FIREBASE_CONFIG);
  }

  async takePhoto() {
    
    try {
      // Defining camera options
      const options: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true
      }

      const result = await this.camera.getPicture(options);

      let loading = this.loadingCtrl.create({
        content: 'Carregando foto...'
      });
      loading.present();

      const image = `data:image/jpeg;base64,${result}`;
      const pictures = storage().ref('pictures/myPhoto');
      pictures.putString(image, 'data_url')
      .then(savepic => {
        this._image = savepic.downloadURL;
      });

      loading.dismiss();

    }
    catch (error) {
      console.log(error);
    }

  }

  savePoint() {
    let newPoint = new Point(this._image, this._titlePoint);
    newPoint.setDescription(this._description);
    // firebase.push(newPoint);
  }

}
