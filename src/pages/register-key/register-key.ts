import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, Toast } from 'ionic-angular';

@Component({
  selector: 'page-register-key',
  templateUrl: 'register-key.html',
})
export class RegisterKeyPage {
  toast: Toast
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  ionViewDidLeave(): void {
    this.toast.dismiss();
  }

  ionViewDidLoad(): void {
    this.toast = this.toastCtrl.create({
      message: 'Press the button padlock to turn on padlock',
      position: 'bottom',
      showCloseButton: true,
    })
    this.toast.present();
  }

}
