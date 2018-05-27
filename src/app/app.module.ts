import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BLE } from '@ionic-native/ble';

import { PagesModule } from '../pages/pages.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { PadlockScannerProvider } from '../providers/padlock-scanner/padlock-scanner';
import { PadlockProvider } from '../providers/padlock/padlock';
import { PipesModule } from '../pipes/pipes.module'

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      modalEnter:'modal-slide-in',
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    SuperTabsModule.forRoot(),
    PipesModule,
    PagesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PadlockScannerProvider,
    PadlockProvider,
    BLE
  ]
})
export class AppModule {}