import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Platform } from 'ionic-angular';

//To use of camera and storage in firebase
import { storage } from 'firebase';
//import { FIREBASE_CONFIG } from '../../app/firebase.config';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Crop } from "@ionic-native/crop";

import { Point } from '../../models/point';


@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})

export class PostPage {

  private _image: any;
  private _titlePoint: String;
  private _description: String;

  constructor(public camera: Camera, public navCtrl: NavController, public loadingCtrl: LoadingController,
              private crop: Crop, public platform: Platform) {
    
  }

  // async takePhoto() {
    
  //   try {
  //     // Defining camera options
  //     const options: CameraOptions = {
  //       quality: 50,
  //       targetHeight: 600,
  //       targetWidth: 600,
  //       destinationType: this.camera.DestinationType.DATA_URL,
  //       encodingType: this.camera.EncodingType.JPEG,
  //       mediaType: this.camera.MediaType.PICTURE,
  //       correctOrientation: true,
  //       allowEdit: true
  //     }

  //     const result = await this.camera.getPicture(options);

  //     let loading = this.loadingCtrl.create({
  //       content: 'Carregando foto...'
  //     });
  //     loading.present();

  //     const image = `data:image/jpeg;base64,${result}`;
  //     const pictures = storage().ref('pictures/myPhoto');
  //     pictures.putString(image, 'data_url')
  //     .then(savepic => {
  //       this._image = savepic.downloadURL;
  //     });

  //     loading.dismiss();

  //   }
  //   catch (error) {
  //     console.log(error);
  //   }

  // }

  cropPhoto(cameraOptions): Promise<any> {
    let cropOptions = {
      quality: 75,
      widthRatio:1,
      heightRatio:1,          
      targetWidth:600,
      targetHeight:600
    };

    return this.camera.getPicture(cameraOptions)
      .then((fileUri) => {
        if (this.platform.is('ios')) {
          return fileUri
        } else if (this.platform.is('android')) {
          fileUri = 'file://' + fileUri;

          return this.crop.crop(fileUri, cropOptions);
        }
      })
      .then((path) => {
        console.log('Cropped Image Path!: ' + path);
        this._image = path;
        return path;
      })
  }

  getMediaFromCamera() {
    let cameraOptions: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        allowEdit: true
    }
    this.cropPhoto(cameraOptions);
  }

  getMediaFromGallery(){

    let cameraOptions: CameraOptions = {
        allowEdit: true,
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        mediaType: this.camera.MediaType.ALLMEDIA,
        destinationType: this.camera.DestinationType.FILE_URI
    };
    this.cropPhoto(cameraOptions);
  }

  savePoint() {
    let newPoint = new Point(this._image, this._titlePoint);
    newPoint.setDescription(this._description);
    // firebase.push(newPoint);
  }

}
