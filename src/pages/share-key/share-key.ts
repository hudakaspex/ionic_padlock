import { Component, ViewChild} from '@angular/core';
import { NavController, LoadingController} from 'ionic-angular';
import { AlertPage } from '../alert/alert';

@Component({
  selector: 'page-share-key',
  templateUrl: 'share-key.html',
})
export class ShareKeyPage {
  @ViewChild('alert') alert:AlertPage

  constructor(
    public navCtrl: NavController,
    public loadingCtrl:LoadingController) {}

  shareTo():void{
    let alertConfig:Object = {
      title: 'Share key',
      subtitle: 'Enter the user you want to share key',
      inputs: [{ name: 'User', placeholder: 'Enter name of user', type: 'text' }],
      buttons: { disagree: 'Close', agree: 'Share' }
    }
    this.alert.promptAlert(alertConfig);
  }

  alertResult(event:string):void{
    let loading = this.loadingCtrl.create({
      spinner :'crescent',
      content : 'Please wait ...',
      duration : 2000
    })

    if (event!='close') {
       loading.present();
    }

    loading.onDidDismiss(()=>{
      this.alert.messageAlert({title:'Success', subtitle:'Success to share key'})
    })
  }
}
