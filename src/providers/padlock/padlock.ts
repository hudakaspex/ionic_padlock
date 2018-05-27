import { Injectable } from '@angular/core';
import { BLE } from '@ionic-native/ble';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PadlockProvider {

  private _uuidService: string;
  private _writeCharateristic: string;
  private _notifyCharateristic: string;

  constructor(
    private name: string,
    private uuid: string,
    private ble: BLE
  ) { }

  private stringToBytes(string) {
    var array = new Uint8Array(string.length);
    for (var i = 0, l = string.length; i < l; i++) {
      array[i] = string.charCodeAt(i);
    }
    return array.buffer;
  }

  private bytesToString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }

  disconnect():void {
    this.ble.disconnect(this.uuid);
  }

  private connectPadlock(): Observable<boolean> {
    return this.ble.connect(this.uuid).map(
      peripheral => {
        this._uuidService = peripheral.characteristics[4].service;
        this._writeCharateristic = peripheral.characteristics[4].characteristic;
        this._notifyCharateristic = peripheral.characteristics[5].characteristic;
        return true;
      },
      error => {
        return false;
      }
    )
  }

  connect(pin: string): Observable<boolean> {
    return this.connectPadlock();
  }

  private batteryNotify(): Observable<any> {
    let convert: boolean = true;
    return this.ble.startNotification(this.uuid, this._uuidService, this._notifyCharateristic).map((buffer) => {
      let value = this.bytesToString(buffer);
      let adc: number;
      let battery: number;
      if (convert) {
        adc = parseInt(value);
        convert = false;
      } else {
        battery = parseInt(value);
        convert = true;
      }
      if (adc != undefined) {
        return { adc: adc };
      } else if (battery != undefined) {
        return { battery: battery };
      }
    })
  }

  battery(pin:string): Observable<any> {
    let message: string = 'BS/';
    let value: any = this.stringToBytes(message);
    this.ble.write(this.uuid, this._uuidService, this._writeCharateristic, value);
    setTimeout(() => {
      this.ble.write(this.uuid, this._uuidService, this._writeCharateristic, value);
    }, 500)
    return this.batteryNotify();
  }

  unlock(pin:string):void {
    let message: string = 'KK/';
    let value: any = this.stringToBytes(message);
    this.ble.write(this.uuid, this._uuidService, this._writeCharateristic, value);
  }

  viewLog(pin:string, time:Date): Observable<any> {
    var log = [{user:"Rico", time : "23-03-2018 19:00:00"}];

    var source = Observable.from(log);
    return source;
  }

  // checkPin(ping:string): Promise<any>{
  //   const promise = new Promise((resolve, reject) => {
  //       resolve(true);
  //   });
  //   return promise;
  // }

}
