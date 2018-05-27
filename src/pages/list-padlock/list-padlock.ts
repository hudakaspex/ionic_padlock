import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, LoadingController, App, PopoverController } from 'ionic-angular';
import { AlertPage } from '../alert/alert';
import { TabsPage } from '../tabs/tabs'
import { PadlockScannerProvider } from '../../providers/padlock-scanner/padlock-scanner';
import { PadlockProvider } from '../../providers/padlock/padlock';
import { PopoverPage } from '../popover/popover';
import { Subscription } from 'rxjs/Subscription';
import { Platform } from 'ionic-angular/platform/platform';

@Component({
  selector: 'page-listPadlock',
  templateUrl: 'list-padlock.html',
})
export class ListPadlockPage {

  @ViewChild('alert') alert: AlertPage;

  private devices: Array<PadlockProvider> = [];
  private selectedDevice: PadlockProvider;
  private scannerSubs: Subscription;
  private interval: number;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public padlockScanner: PadlockScannerProvider,
    public zone: NgZone,
    public app: App,
    public popoverCtrl: PopoverController,
    public platforms: Platform) { }

  ionViewDidEnter(): void {
    this.platforms.ready().then(() => {
      this.scanPadlock();
      this.interval = setInterval(() => {
        this.scanPadlock();
      }, 12000);
      if (this.platforms.pause) {
        console.log('interval clear')
      }
    })
  }

  ionViewDidLeave(): void {
    clearInterval(this.interval);
    this.scannerSubs.unsubscribe();
  }

  scanPadlock(): void {
    this.devices = [];
    this.scannerSubs = this.padlockScanner.scanner(10).subscribe((data) => {
      this.zone.run(() => {
        this.devices.push(data);
      })
    })
  }

  connectPadlock(device: PadlockProvider): void {
    this.selectedDevice = device;
    this.alert.promptAlert(this.alerts('Enter your padlock key'));
  }

  alertResult(value: string): void {
    let loader = this.createLoader(3000);
    loader.present();
    if (value == 'close') {
      loader.dismiss();
    }
    else {
      let connectSubs: Subscription = this.selectedDevice.connect(value).subscribe(() => {
        loader.dismiss();
        loader.onDidDismiss(() => {
          let nav = this.app.getRootNav();
          nav.push(TabsPage, { rootTabs: 'dashboardTabs', padlockProvider: { padlock: this.selectedDevice, pin: value } });
          connectSubs.unsubscribe();
        })
      })
    }
  }

  moreOptions(event: Object): void {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }

  createLoader(time: number): any {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Please wait...',
      duration: time,
    });
    return loading;
  }

  alerts(subtitle: string): Object {
    let alertConfig = {
      title: 'Login Padlock',
      subtitle: subtitle,
      inputs: [{ name: 'key', placeholder: 'Enter Key', type: 'password' }],
      buttons: { disagree: 'Close', agree: 'Save' }
    }
    return alertConfig;
  }
}


// note
//tidak detect bluetooth, detect setelah bluetooth dimatikan