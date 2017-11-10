import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Platform } from 'ionic-angular';

//To use of camera and storage in firebase
import { storage } from 'firebase';
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

  private _cropOptions = {
    quality: 100,
    widthRatio:1,
    heightRatio:1,          
    targetWidth:600,
    targetHeight:600
  };

  private _cameraOptions = {
    allowEdit: true,
    quality: 100,
    targetHeight: 600,
    targetWidth: 600,
    correctOrientation: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    destinationType: this.camera.DestinationType.FILE_URI //need to be data_url
  };

  private _galleryOptions = {
    allowEdit: true,
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    mediaType: this.camera.MediaType.ALLMEDIA,
    destinationType: this.camera.DestinationType.FILE_URI
  };

  constructor(public camera: Camera,
              public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private crop: Crop,
              public platform: Platform) {

  }

  public getMediaFromCamera(fab: any): Promise<any> {
    fab.close();
    return this.camera.getPicture(this._cameraOptions)
    .then((fileUri) => {
      if (this.platform.is('ios')) {
        return fileUri;
      }
      else if (this.platform.is('android')) {
        return fileUri;
      }
    })
    .then((path) => {
      this._image = path;
      return path;
    })
  }

  public getMediaFromGallery(fab: any) {
    fab.close();
    this.cropPhoto(this._galleryOptions).then((path) => {
      console.log(path);
      this.uploadPhoto(path);
    });
  }

  private cropPhoto(cameraOptions): Promise<any> {
    return this.camera.getPicture(cameraOptions)
    .then((fileUri) => {
      if (this.platform.is('ios')) {
        return fileUri;
      }
      else if (this.platform.is('android')) {
        fileUri = 'file://' + fileUri;
        return this.crop.crop(fileUri, this._cropOptions);
      }
    })
    .then((path) => {
      this._image = path;
      return path;
    })
  }

  public savePoint() {
    //code to save a point in database
  }

  private uploadPhoto(photoPath: any) {
    let loading = this.loadingCtrl.create({
      content: 'Carregando foto...'
    });
    loading.present();

    try {
      const image = `data:image/jpeg;base64,${photoPath}`; //waiting changes
      const pictures = storage().ref('pictures/myPhoto');
      pictures.putString(image, 'data_url')
      .then(savepic => {
        this._image = savepic.downloadURL;
      });
    }
    catch (error) {
      console.log(error);
    }

    loading.dismiss();
  }

}
