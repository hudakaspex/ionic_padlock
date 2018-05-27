import { Component, Output, EventEmitter } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-alert',
  template: '',
})
export class AlertPage {
  @Output() private alertResult = new EventEmitter()

  constructor(private alert: AlertController) { }

  promptAlert(config) {
    let prompt = this.alert.create({
      title: config.title,
      message: config.subtitle,
      inputs: config.inputs,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: config.buttons['disagree'],
          handler: data => {
            this.alertResult.emit('close')
          }
        },
        {
          text: config.buttons['agree'],
          handler: data => {
            for (let i of config.inputs) {
              this.alertResult.emit(data[i.name])
            }
          }
        }
      ]
    })
    prompt.present()
  }

  messageAlert(config) {
    let prompt = this.alert.create({
      title: config.title,
      message: config.subtitle,
      buttons: ['Ok']
    })
    prompt.present();
  }

}