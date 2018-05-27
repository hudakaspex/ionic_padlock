import { Component } from '@angular/core';
import { NavController, Events, PopoverController, NavParams } from 'ionic-angular';
import { ViewlogPage } from '../view-log/view-log';
import { DashboardPage } from '../dashboard/dashboard';
import { ListPadlockPage } from '../list-padlock/list-padlock';
import { LoginPage } from '../login/login';
import { PadlockProvider } from '../../providers/padlock/padlock';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  private title: string;
  private rootPage: Array<any> = [];
  private rootTabs: string;
  private padlockProvider: PadlockProvider;


  dashboardTabs: Array<Object> = [
    { title: 'Dashboard', root: DashboardPage, param: { tabsParam: this.padlockProvider } },
    { title: 'View Log', root: ViewlogPage, param: { tabsParam: this.padlockProvider } },
  ]

  homeTabs: Array<Object> = [
    { title: 'Padlock', root: ListPadlockPage, icon: 'ios-lock' },
    { title: 'Login', root: LoginPage, icon: 'ios-contact' },
  ]

  constructor(
    public navCtrl: NavController,
    public events: Events,
    public popover: PopoverController,
    public navParams: NavParams) {
    this.rootTabs = navParams.get('rootTabs');
    this.padlockProvider = navParams.get('padlockProvider');

    if (this.rootTabs == 'dashboardTabs') {
      this.title = this.padlockProvider['padlock']['name']
      for (let dashboard of this.dashboardTabs) {
        dashboard['param'].tabsParam = this.padlockProvider
      }
    }

    events.subscribe('backToRoot', () => {
      this.navCtrl.popToRoot();
    })
  }
}

//subscribe connect