import { Component, NgZone, ViewChild } from '@angular/core';
import { NavController, Events, ModalController, NavParams } from 'ionic-angular';
import { ChangePinPage } from '../change-pin/change-pin';
import { PadlockProvider } from '../../providers/padlock/padlock';
import { Subscription } from 'rxjs/Subscription';
import { AlertPage } from '../alert/alert';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  private max: number = 100;
  private current: number = 0;
  private gaugeColor: string;
  private padlock: PadlockProvider;
  private pin: string;
  private connectSubs: Subscription;
  @ViewChild('alert') alert: AlertPage

  constructor(
    public navCtrl: NavController,
    public events: Events,
    public modalCtrl: ModalController,
    public zone: NgZone,
    public navParams: NavParams) {
    let tabParams = this.navParams.get('tabsParam');
    this.padlock = tabParams['padlock'];
    this.pin = tabParams['pin'];

    this.connectSubs = this.padlock.connect(this.pin).subscribe(
      connect => {
        this.getBattery();
      },
      error => {
        if (error) {
          this.connectSubs.unsubscribe();
          this.events.publish('backToRoot');
          this.alert.messageAlert({ title: 'Disconnected', subtitle: 'Device disconnected' })
        }
      }
    )
  }


  getBattery(): void {
    let batterySubs = this.padlock.battery(this.pin).subscribe(battery => {
      this.zone.run(() => {
        if (battery.battery != undefined) {
          this.current = battery.battery;
          this.setGaugeColor(this.current);
          batterySubs.unsubscribe();
        }
      })
    })
  }

  setGaugeColor(battery: number): void {
    if (battery <= 30) {
      this.gaugeColor = '#ea4c25';
    }
    else if (battery <= 50 && battery > 30) {
      this.gaugeColor = '#f4e541';
    } else {
      this.gaugeColor = '#77d822';
    }
  }

  scanPadlock(): void {
    this.connectSubs.unsubscribe();
    this.padlock.disconnect();
    this.events.publish('backToRoot');
  }

  showChangePin(): void {
    let modal = this.modalCtrl.create(ChangePinPage, { padlockProvider: { padlock: this.padlock, pin: this.pin } })
    modal.present();
  }

  unlock(): void {
    this.padlock.unlock(this.pin);
  }

}
