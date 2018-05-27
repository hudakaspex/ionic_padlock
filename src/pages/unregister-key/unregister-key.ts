import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, Toast } from 'ionic-angular';
import { AlertPage } from '../alert/alert';
import { Loading } from 'ionic-angular/components/loading/loading';

@Component({
  selector: 'page-unregister-key',
  templateUrl: 'unregister-key.html',
})
export class UnregisterKeyPage {
  toast: Toast
  @ViewChild('alert') alert: AlertPage

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) { }

  ionViewDidLeave(): void {
    this.toast.dismiss();
  }

  ionViewDidLoad(): void {
    this.toast = this.toastCtrl.create({
      message: 'Press the button padlock to turn on padlock',
      position: 'bottom',
      showCloseButton: true
    })
    this.toast.present();
  }

  showAlert(): void {
    let configAlert: Object = {
      title: 'Unregister Key',
      subtitle: 'Enter master key of padlock to unregister master key to padlock',
      inputs: [{ name: 'key', placeholder: 'Enter Key', type: 'password' }],
      buttons: { disagree: 'Close', agree: 'Unregister' }
    }
    this.alert.promptAlert(configAlert)
  }

  alertResult(event: string): void {
    let configAlert: Object = {
      title: 'Success',
      subtitle: 'Success to unregister master key from padlock'
    }

    let loading: Loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Please wait ...',
      duration: 2000
    })

    if (event != 'close') {
      loading.present();
      loading.onDidDismiss(() => {
        this.alert.messageAlert(configAlert);
      })
    }
  }

}
