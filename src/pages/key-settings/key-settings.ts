import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShareKeyPage } from '../share-key/share-key';
import { RegisterKeyPage } from '../register-key/register-key';
import { UnshareKeyPage } from '../unshare-key/unshare-key';
import { UnregisterKeyPage } from '../unregister-key/unregister-key';

@Component({
  selector: 'page-key-settings',
  templateUrl: 'key-settings.html',
})
export class KeySettingsPage {
  listSetting: Array<Object> = [
    { title: 'Register master key', icon: 'key2', page: RegisterKeyPage },
    { title: 'Unregister master key', icon: 'ios-trash', page: UnregisterKeyPage },
    { title: 'Share key', icon: 'share', page: ShareKeyPage },
    { title: 'Unshare key', icon: 'unshare', page: UnshareKeyPage },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  navigateTo(page: string): void {
    this.navCtrl.push(page);
  }

}
