import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ViewController, LoadingController, NavParams } from 'ionic-angular';
import { AlertPage } from '../alert/alert';
import { Loading } from 'ionic-angular/components/loading/loading';
import { FormEqualValidatePipe } from '../../pipes/form-equal-validate/form-equal-validate';
import { PadlockProvider } from '../../providers/padlock/padlock';

@Component({
  selector: 'page-change-pin',
  templateUrl: 'change-pin.html',
})
export class ChangePinPage {
  @ViewChild('alert') private alert: AlertPage;
  private padlock: PadlockProvider;
  private pin:string;
  private form: FormGroup;
  private loading: Loading;
  private contentPage: Array<Object> = [
    { placeholder: 'Old key', name: 'oldKey', errorMessage: 'key' },
    { placeholder: 'New key', name: 'newKey', errorMessage: 'key' },
    { placeholder: 'Confirm new key', name: 'confirm newKey', errorMessage: 'key' }
  ]

  constructor(
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public equalValidate: FormEqualValidatePipe,
    public params: NavParams) {
    let tabParams = params.get('padlockProvider');
    this.padlock = tabParams['padlock'];
    this.pin = tabParams['pin'];

    this.form = formBuilder.group({
      'newKey': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'oldKey': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'confirm newKey': ['', Validators.compose([Validators.required, this.equalValidate.transform('newKey')])]
    })
    this.setErrorConfirm();
  }

  setErrorConfirm(): void {
    this['form'].valueChanges.subscribe(value => {
      if (value['newKey'] == value['confirm newKey']) {
        this.form.get('confirm newKey').setErrors(null);
      }
      else {
        this.form.get('confirm newKey').setErrors({ equalTo: true });
      }
    })
  }

  setLoading(time: number): void {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait ...',
      duration: time
    })
    this.loading.present();
  }


  closeModal(value: Object): void {
    let successAlert: Object = {
      title: 'Success',
      subtitle: 'Successfully to change key'
    }

    let incorrectAlert: Object = {
      title: "Incorrect",
      subtitle: "the key you entered is incorrect"
    }

    if (this.form.valid) {
      this.setLoading(1000);
      this.loading.onDidDismiss(() => {
        this.alert.messageAlert(successAlert);
        this.viewCtrl.dismiss();
      })
    } else {
      this.setLoading(1000);
      this.loading.onDidDismiss(() => {
        this.alert.messageAlert(incorrectAlert);
      })
    }
  }

  backPage(): void {
    this.viewCtrl.dismiss();
  }


}
