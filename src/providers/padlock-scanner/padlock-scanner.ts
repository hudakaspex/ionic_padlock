import { Injectable } from '@angular/core';
import { BLE } from '@ionic-native/ble';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { PadlockProvider } from '../padlock/padlock';

@Injectable()
export class PadlockScannerProvider {

  constructor(private ble:BLE) { }

  private scan(seconds:number): Observable<any>{
    let uuid:string = "6e400001-b5a3-f393-e0a9-e50e24dcca9e"; //UUID Service on the padlock
    return this.ble.scan([uuid], seconds).map((peripheral) =>{
      let name:string = peripheral.name;
      let uuid:string = peripheral.id;
      let value = new PadlockProvider(name, uuid, this.ble);
      return value; //return padlock device
    });
  }

  scanner(seconds:number): Observable<any>{
    this.ble.enable(); //Bluetooth Enable
    return this.scan(seconds);
  }
}
