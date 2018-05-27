import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { KeySettingsPage } from '../key-settings/key-settings';
import { Toast } from '@ionic-native/toast';
import { FormEqualValidatePipe } from '../../pipes/form-equal-validate/form-equal-validate';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private formSignup: FormGroup;
  private formSignin: FormGroup;
  private selectedSegment: string;
  private forms: Object = {
    formSignin: [
      { name: "username", icon: 'ios-contact', type: 'text', validator: 'required' },
      { name: "password", icon: 'ios-lock', type: 'password', validator: 'required' }
    ],

    formSignup: [
      { name: "username", icon: 'ios-contact', type: 'text', validator: 'required' },
      { name: "email", icon: 'ios-mail', type: 'email', validator: 'email' },
      { name: "password", icon: 'ios-lock', type: 'password', validator: 'required' },
      { name: "confirm password", icon: 'ios-lock', type: 'password', validator: 'confirmPassword' }
    ]
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public app: App,
    public toast:Toast,
    public validateEqual:FormEqualValidatePipe) {

    this.selectedSegment = 'signin';
    this.setFormControl(formBuilder);
    this.setErrorConfirm();
    this.validateFormLogin();
  };

  setFormControl(formBuilder: FormBuilder): void {
    let validators: Object = {
      'email': ['', Validators.compose([Validators.email, Validators.required])],
      'required': ['', Validators.compose([Validators.required])],
      'confirmPassword': ['', Validators.compose([Validators.required, this.validateEqual.transform('password')])],
    };

    let formControl: Object = {};
    for (let form in this.forms) {
      for (let j of this.forms[form]) {
        formControl[j.name] = validators[j.validator]
      }
      this[form] = formBuilder.group(formControl);
    }
  };

  setErrorConfirm(): void {
    this['formSignup'].valueChanges.subscribe(values => {
      if (values['password'] != values['confirm password']) {
        this['formSignup'].get('confirm password').setErrors({ equalTo: true })
      }
      else {
        this['formSignup'].get('confirm password').setErrors(null)
      }
    })
  }

  validateFormLogin(): void {
    let formControlName: Array<string> = ['username', 'password'];
    this['formSignin'].valueChanges.subscribe(value => {
      for (let name of formControlName) {
        let required: boolean = this['formSignin'].get(name).hasError('required');
        let touched: boolean = this['formSignin'].controls[name].touched;
        let dirty: boolean = this['formSignin'].controls[name].dirty;
        if (required && (touched || dirty)) {
           this.toast.show(name+' is required', '2500', 'bottom').subscribe(toast=>{
           })
        }
      }
    })
  }

  signin(event: FormGroup): void {
    let nav = this.app.getRootNav()
    nav.push(KeySettingsPage);
  };


  signup(event: FormGroup): void {
    console.log(event);
  };

}