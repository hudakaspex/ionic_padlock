import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { PadlockProvider } from '../../providers/padlock/padlock';

@Component({
  selector: 'page-viewLog',
  templateUrl: 'view-log.html'
})
export class ViewlogPage {
  private date: string = null
  private list: Array<Object> = [];
  private padlock: PadlockProvider;
  private pin: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public datePicker: DatePicker) {
    let tabParams = navParams.get('tabsParam');
    this.padlock = tabParams['padlock'];
    this.pin = tabParams['pin']
    this.setFilterWithDate();
  }

  setFilterWithDate(): void {
    this.list = []
    this.padlock.viewLog(this.pin, new Date(this.date)).subscribe((result) => {
      this.list.push(result);
    })
  }

  setDate(): void {
    this.datePicker.show({
      date: new Date(),
      maxDate: Date.parse(new Date().toDateString()),
      mode: 'datetime',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
    }).then(
      date => {
        let localDate: string = date.toLocaleString()
        this.date = localDate;
        this.setFilterWithDate();
      },
      err => console.log(err)
      )
  }

  resetDate(): void {
    this.date = null
    this.setFilterWithDate();
  }
}
