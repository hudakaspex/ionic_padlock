import { Component } from '@angular/core';
import { NavController, NavParams,ViewController} from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';
import { Dialogs } from '@ionic-native/dialogs';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public loading: SpinnerDialog,
    public dialog: Dialogs,
    public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  exitApp(): void {
    this.viewCtrl.dismiss();
    this.dialog.confirm('Are you sure to exit ?', 'Confirm', ['Cancel', 'Ok']).then(index => {
      if (index == 2) {
          this.loading.show('','Please Wait ...');
          setTimeout(()=>{
            this.loading.hide();
            this.platform.exitApp();
          }, 2500)
      }
    })

  }

  navigateSettings(): void { }

}
