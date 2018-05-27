import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-unshare-key',
  templateUrl: 'unshare-key.html',
})
export class UnshareKeyPage {
  user : Array<any> = [1,2,3,4,5]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnshareKeyPage');
  }

}
