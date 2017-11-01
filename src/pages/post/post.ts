import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//To use of camera and storage in firebase
import { storage, initializeApp } from 'firebase';
import { FIREBASE_CONFIG } from '../../app/firebase.config';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})

export class PostPage {
  
  constructor(public camera: Camera, public navCtrl: NavController) {
      initializeApp(FIREBASE_CONFIG);
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
      const image = `data:image/jpeg;base64,${result}`;
      const pictures = storage().ref('pictures/myPhoto');
      pictures.putString(image, 'data_url');

    }
    catch (error) {
      console.log(error)
    }

  }

}
