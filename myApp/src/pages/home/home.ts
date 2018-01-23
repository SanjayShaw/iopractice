/*
   import { Component } from '@angular/core';
    import { NavController } from 'ionic-angular';
    import { Camera } from '@ionic-native/camera';


    @Component({
    selector: 'page-home',
    templateUrl: 'home.html'
    })
    export class HomePage {

    public base64Image: string;

    constructor(public navCtrl: NavController) {
        this.base64Image = "https://placehold.it/150x150";

    }

    
    
    public takePicture() {
            Camera.getPicture({
                quality : 75,
                destinationType: camera.destinationType.DATA_URL,
                sourceType: camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300,
                saveToPhotoAlbum: false
            }).then(imageData => {
                this.base64Image = "data:image/jpeg;base64," + imageData;
            }, error => {
                console.log("ERROR -> " + JSON.stringify(error));
            });
        }

    }
*/


import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';


@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {

    public base64Image: string;

    constructor(public navCtrl: NavController) {
        this.base64Image = "https://placehold.it/150x150";

    }

    



    /*
    const options: CameraOptions = {
        quality: 100,
        destinationType: this.Camera.DestinationType.DATA_URL,
        encodingType: this.Camera.EncodingType.JPEG,
        mediaType: this.Camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    // Handle error
    }); 
    */

    public takePicture() {
        Camera.getPicture({
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            saveToPhotoAlbum: false
        }).then(imageData => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }

}

