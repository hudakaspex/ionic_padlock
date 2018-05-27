import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicPageModule, IonicErrorHandler } from 'ionic-angular';

/*Pages*/
import { ChangePinPage } from './change-pin/change-pin';
import { AlertPage } from './alert/alert';
import { PopoverPage } from './popover/popover';
import { DashboardPage } from './dashboard/dashboard';
import { LoginPage } from './login/login';
import { ViewlogPage } from './view-log/view-log';
import { ListPadlockPage } from './list-padlock/list-padlock';
import { TabsPage } from './tabs/tabs';
import { KeySettingsPage } from './key-settings/key-settings';
import { ShareKeyPage } from './share-key/share-key';
import { RegisterKeyPage } from './register-key/register-key';
import { UnshareKeyPage } from './unshare-key/unshare-key';
import { UnregisterKeyPage } from './unregister-key/unregister-key';

/*Module*/
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { SuperTabsModule } from 'ionic2-super-tabs';

/*Native*/
import { Toast } from '@ionic-native/toast';
import { Dialogs } from '@ionic-native/dialogs';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { DatePicker } from '@ionic-native/date-picker';



@NgModule({
  declarations: [
    ChangePinPage,
    AlertPage,
    PopoverPage,
    DashboardPage,
    LoginPage,
    ViewlogPage,
    ListPadlockPage,
    TabsPage,
    KeySettingsPage,
    ShareKeyPage,
    RegisterKeyPage,
    UnshareKeyPage,
    UnregisterKeyPage
  ],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(PagesModule),
    RoundProgressModule,
    SuperTabsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ChangePinPage,
    AlertPage,
    PopoverPage,
    DashboardPage,
    LoginPage,
    ViewlogPage,
    ListPadlockPage,
    TabsPage,
    KeySettingsPage,
    ShareKeyPage,
    RegisterKeyPage,
    UnshareKeyPage,
    UnregisterKeyPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Toast,
    Dialogs,
    SpinnerDialog,
    DatePicker
  ]
})
export class PagesModule { }
