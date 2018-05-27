webpackJsonp([0],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_log_view_log__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_padlock_list_padlock__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let TabsPage = class TabsPage {
    constructor(navCtrl, events, popover, navParams) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.popover = popover;
        this.navParams = navParams;
        this.rootPage = [];
        this.dashboardTabs = [
            { title: 'Dashboard', root: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */], param: { tabsParam: this.padlockProvider } },
            { title: 'View Log', root: __WEBPACK_IMPORTED_MODULE_2__view_log_view_log__["a" /* ViewlogPage */], param: { tabsParam: this.padlockProvider } },
        ];
        this.homeTabs = [
            { title: 'Padlock', root: __WEBPACK_IMPORTED_MODULE_4__list_padlock_list_padlock__["a" /* ListPadlockPage */], icon: 'ios-lock' },
            { title: 'Login', root: __WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], icon: 'ios-contact' },
        ];
        this.rootTabs = navParams.get('rootTabs');
        this.padlockProvider = navParams.get('padlockProvider');
        if (this.rootTabs == 'dashboardTabs') {
            this.title = this.padlockProvider['padlock']['name'];
            for (let dashboard of this.dashboardTabs) {
                dashboard['param'].tabsParam = this.padlockProvider;
            }
        }
        events.subscribe('backToRoot', () => {
            this.navCtrl.popToRoot();
        });
    }
};
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/satunol/IONIC/project/blok_personal/src/pages/tabs/tabs.html"*/'<span *ngIf="rootTabs==\'dashboardTabs\'">\n  <ion-header no-border>\n    <ion-toolbar color="primary">\n      <ion-title>\n        {{title}}\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <super-tabs toolbarColor="light" indicatorColor="light" toolbarBackground="primary">\n      <super-tab *ngFor="let page of dashboardTabs" [root]="page.root" title="{{page.title}}" [rootParams]="page.param"></super-tab>\n    </super-tabs>\n  </ion-content>\n</span>\n\n<ion-content *ngIf="rootTabs==\'homeTabs\'">\n  <ion-tabs color="light">\n    <ion-tab *ngFor="let page of homeTabs" [root]="page.root" tabTitle="{{page.title}}" tabIcon="{{page.icon}}"></ion-tab>\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"/home/satunol/IONIC/project/blok_personal/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], TabsPage);

//subscribe connect 
//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormEqualValidatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let FormEqualValidatePipe = class FormEqualValidatePipe {
    transform(field_name) {
        return (control) => {
            let input = control['value'];
            let isValid = control.root.value[field_name] == input;
            if (isValid) {
                return null;
            }
            else {
                return { 'equalTo': 'a' };
            }
        };
    }
};
FormEqualValidatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'formEqualValidate',
    })
], FormEqualValidatePipe);

//# sourceMappingURL=form-equal-validate.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ViewlogPage = class ViewlogPage {
    constructor(navCtrl, navParams, datePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.date = null;
        this.list = [];
        let tabParams = navParams.get('tabsParam');
        this.padlock = tabParams['padlock'];
        this.pin = tabParams['pin'];
        this.setFilterWithDate();
    }
    setFilterWithDate() {
        this.list = [];
        this.padlock.viewLog(this.pin, new Date(this.date)).subscribe((result) => {
            this.list.push(result);
        });
    }
    setDate() {
        this.datePicker.show({
            date: new Date(),
            maxDate: Date.parse(new Date().toDateString()),
            mode: 'datetime',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
        }).then(date => {
            let localDate = date.toLocaleString();
            this.date = localDate;
            this.setFilterWithDate();
        }, err => console.log(err));
    }
    resetDate() {
        this.date = null;
        this.setFilterWithDate();
    }
};
ViewlogPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-viewLog',template:/*ion-inline-start:"/home/satunol/IONIC/project/blok_personal/src/pages/view-log/view-log.html"*/'<ion-content>\n    <ion-list>\n        <ion-item style="border-bottom:1px solid rgb(248, 248, 248);" no-lines text-center>\n            <button [disabled]="list.length==0" item-start clear ion-button (click)="setDate()">\n              <ion-icon name="calendar" style="font-size:28px;"></ion-icon>\n            </button>\n            <ion-input disabled="true" placeholder="Search with date" [value]="date"></ion-input>\n            <button [disabled]="list.length==0" item-end clear ion-button (click)="resetDate()">\n              <ion-icon name="close" style="font-size:16px;"></ion-icon>\n            </button>\n          </ion-item>\n        <ion-list-header>History</ion-list-header>\n    </ion-list>\n    <ion-scroll style="width:100%;height:65vh" scrollY="true">\n        <ion-list scroll="true">\n            <div *ngIf="list.length != 0">\n                <ion-item *ngFor="let i of list">\n                    <ion-icon item-start name="lock-pin-circle" style="font-size:50px;" color="primary"></ion-icon>\n                    <h2>Padlock2B14</h2>\n                    <p style="font-size:12px;">3b:45:dd:89:s9:8i</p>\n                    <ion-note item-end style="font-size:12px;">23-03-2018</ion-note>\n                </ion-item>\n            </div>\n        </ion-list>\n    </ion-scroll>\n    <div class="txtCenter" *ngIf="list.length==0">\n        <ion-icon name="ios-list-outline" style="font-size:68px;"></ion-icon>\n        <p style="font-size:15px;">No available history</p>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/satunol/IONIC/project/blok_personal/src/pages/view-log/view-log.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */]])
], ViewlogPage);

//# sourceMappingURL=view-log.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_pin_change_pin__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let DashboardPage = class DashboardPage {
    constructor(navCtrl, events, modalCtrl, zone, navParams) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.navParams = navParams;
        this.max = 100;
        this.current = 0;
        let tabParams = this.navParams.get('tabsParam');
        this.padlock = tabParams['padlock'];
        this.pin = tabParams['pin'];
        this.connectSubs = this.padlock.connect(this.pin).subscribe(connect => {
            this.getBattery();
        }, error => {
            if (error) {
                this.connectSubs.unsubscribe();
                this.events.publish('backToRoot');
                this.alert.messageAlert({ title: 'Disconnected', subtitle: 'Device disconnected' });
            }
        });
    }
    getBattery() {
        let batterySubs = this.padlock.battery(this.pin).subscribe(battery => {
            this.zone.run(() => {
                if (battery.battery != undefined) {
                    this.current = battery.battery;
                    this.setGaugeColor(this.current);
                    batterySubs.unsubscribe();
                }
            });
        });
    }
    setGaugeColor(battery) {
        if (battery <= 30) {
            this.gaugeColor = '#ea4c25';
        }
        else if (battery <= 50 && battery > 30) {
            this.gaugeColor = '#f4e541';
        }
        else {
            this.gaugeColor = '#77d822';
        }
    }
    scanPadlock() {
        this.connectSubs.unsubscribe();
        this.padlock.disconnect();
        this.events.publish('backToRoot');
    }
    showChangePin() {
        let modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__change_pin_change_pin__["a" /* ChangePinPage */], { padlockProvider: { padlock: this.padlock, pin: this.pin } });
        modal.present();
    }
    unlock() {
        this.padlock.unlock(this.pin);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('alert'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__alert_alert__["a" /* AlertPage */])
], DashboardPage.prototype, "alert", void 0);
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/home/satunol/IONIC/project/blok_personal/src/pages/dashboard/dashboard.html"*/'<page-alert #alert></page-alert>\n<ion-content padding>\n  <ion-list>\n    <ion-grid>\n      <ion-row text-center>\n        <ion-col width-33></ion-col>\n        <ion-col width-33>\n          <ion-card class="gauge-card">\n            <div class="progress-wraper">\n              <div class="progress">{{current}}%\n                <p>Power</p>\n              </div>\n              <round-progress [current]="current" [max]="max" [color]="gaugeColor" [background]="\'#eaeaea\'" [radius]="112" [stroke]="6"\n                [semicircle]="false" [clockwise]="true" [responsive]="false" [duration]="900" [animation]="\'linearEase\'" [animationDelay]="400">\n              </round-progress>\n            </div>\n          </ion-card>\n        </ion-col>\n        <ion-col width-33></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col id="col-left" col-6 (click)="scanPadlock()">\n          <ion-icon name="ios-lock"></ion-icon>\n          <p style="font-size:11px;color:rgb(156, 151, 146)">SEARCH DEVICE</p>\n        </ion-col>\n        <ion-col id="col-right" col-6 (click)="showChangePin()">\n          <ion-icon name="ios-key"></ion-icon>\n          <P style="font-size:11px;color:rgb(156, 151, 146)">CHANGE KEY</P>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col width-33></ion-col>\n        <ion-col width-33>\n          <button class="unlockBtn" ion-button round outline color="primary" (click)="unlock()">UNLOCK</button>\n        </ion-col>\n        <ion-col width-33></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/satunol/IONIC/project/blok_personal/src/pages/dashboard/dashboard.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_form_equal_validate_form_equal_validate__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ChangePinPage = class ChangePinPage {
    constructor(viewCtrl, formBuilder, loadingCtrl, equalValidate, params) {
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.equalValidate = equalValidate;
        this.params = params;
        this.contentPage = [
            { placeholder: 'Old key', name: 'oldKey', errorMessage: 'key' },
            { placeholder: 'New key', name: 'newKey', errorMessage: 'key' },
            { placeholder: 'Confirm new key', name: 'confirm newKey', errorMessage: 'key' }
        ];
        let tabParams = params.get('padlockProvider');
        this.padlock = tabParams['padlock'];
        this.pin = tabParams['pin'];
        this.form = formBuilder.group({
            'newKey': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])],
            'oldKey': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])],
            'confirm newKey': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, this.equalValidate.transform('newKey')])]
        });
        this.setErrorConfirm();
    }
    setErrorConfirm() {
        this['form'].valueChanges.subscribe(value => {
            if (value['newKey'] == value['confirm newKey']) {
                this.form.get('confirm newKey').setErrors(null);
            }
            else {
                this.form.get('confirm newKey').setErrors({ equalTo: true });
            }
        });
    }
    setLoading(time) {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait ...',
            duration: time
        });
        this.loading.present();
    }
    closeModal(value) {
        let successAlert = {
            title: 'Success',
            subtitle: 'Successfully to change key'
        };
        let incorrectAlert = {
            title: "Incorrect",
            subtitle: "the key you entered is incorrect"
        };
        if (this.form.valid) {
            this.setLoading(1000);
            this.loading.onDidDismiss(() => {
                this.alert.messageAlert(successAlert);
                this.viewCtrl.dismiss();
            });
        }
        else {
            this.setLoading(1000);
            this.loading.onDidDismiss(() => {
                this.alert.messageAlert(incorrectAlert);
            });
        }
    }
    backPage() {
        this.viewCtrl.dismiss();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('alert'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__alert_alert__["a" /* AlertPage */])
], ChangePinPage.prototype, "alert", void 0);
ChangePinPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-change-pin',template:/*ion-inline-start:"/home/satunol/IONIC/project/blok_personal/src/pages/change-pin/change-pin.html"*/'<page-alert #alert></page-alert>\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="backPage()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Change Pin</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="form">\n    <ion-list>\n      <span *ngFor="let i of contentPage">\n        <ion-item>\n          <ion-label floating>{{i.placeholder}}</ion-label>\n          <ion-input [formControlName]="i.name" maxlength="32" type="password"></ion-input>\n        </ion-item>\n        <div class="errorMessage">\n          <small *ngIf="form.get(i.name).hasError(\'required\') && form.controls[i.name].touched">*{{i.errorMessage}} is required</small>\n          <small *ngIf="form.get(i.name).hasError(\'minlength\') && !form.get(i.name).hasError(\'required\') && form.controls[i.name].touched">* you must provide 6 characters for {{i.errorMessage}}</small>\n          <small *ngIf="form.get(i.name).hasError(\'equalTo\') && !form.get(i.name).hasError(\'required\') &&( form.controls[i.name].touched ||  form.controls[i.name].dirty)">* mismatch key</small>\n        </div>\n      </span>\n    </ion-list>\n  <button padding ion-button full [disabled]="!form.valid" (click)="closeModal(form.value)">Save</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/satunol/IONIC/project/blok_personal/src/pages/change-pin/change-pin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__pipes_form_equal_validate_form_equal_validate__["a" /* FormEqualValidatePipe */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */]])
], ChangePinPage);

//# sourceMappingURL=change-pin.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPadlockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_padlock_scanner_padlock_scanner__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_popover__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_platform_platform__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let ListPadlockPage = class ListPadlockPage {
    constructor(navCtrl, loadingCtrl, padlockScanner, zone, app, popoverCtrl, platforms) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.padlockScanner = padlockScanner;
        this.zone = zone;
        this.app = app;
        this.popoverCtrl = popoverCtrl;
        this.platforms = platforms;
        this.devices = [];
    }
    ionViewDidEnter() {
        this.platforms.ready().then(() => {
            this.scanPadlock();
            this.interval = setInterval(() => {
                this.scanPadlock();
            }, 12000);
            if (this.platforms.pause) {
                console.log('interval clear');
            }
        });
    }
    ionViewDidLeave() {
        clearInterval(this.interval);
        this.scannerSubs.unsubscribe();
    }
    scanPadlock() {
        this.devices = [];
        this.scannerSubs = this.padlockScanner.scanner(10).subscribe((data) => {
            this.zone.run(() => {
                this.devices.push(data);
            });
        });
    }
    connectPadlock(device) {
        this.selectedDevice = device;
        this.alert.promptAlert(this.alerts('Enter your padlock key'));
    }
    alertResult(value) {
        let loader = this.createLoader(3000);
        loader.present();
        if (value == 'close') {
            loader.dismiss();
        }
        else {
            let connectSubs = this.selectedDevice.connect(value).subscribe(() => {
                loader.dismiss();
                loader.onDidDismiss(() => {
                    let nav = this.app.getRootNav();
                    nav.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], { rootTabs: 'dashboardTabs', padlockProvider: { padlock: this.selectedDevice, pin: value } });
                    connectSubs.unsubscribe();
                });
            });
        }
    }
    moreOptions(event) {
        let popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__popover_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    }
    createLoader(time) {
        let loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Please wait...',
            duration: time,
        });
        return loading;
    }
    alerts(subtitle) {
        let alertConfig = {
            title: 'Login Padlock',
            subtitle: subtitle,
            inputs: [{ name: 'key', placeholder: 'Enter Key', type: 'password' }],
            buttons: { disagree: 'Close', agree: 'Save' }
        };
        return alertConfig;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('alert'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__alert_alert__["a" /* AlertPage */])
], ListPadlockPage.prototype, "alert", void 0);
ListPadlockPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-listPadlock',template:/*ion-inline-start:"/home/satunol/IONIC/project/blok_personal/src/pages/list-padlock/list-padlock.html"*/'<page-alert #alert (alertResult)="alertResult($event)"></page-alert>\n<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>\n      Padlock\n    </ion-title>\n    <ion-buttons icon-only end>\n      <button ion-button (click)="moreOptions($event)">\n        <ion-icon name="more" style="font-size:28px;"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf="devices.length!=0" no-padding>\n    <ion-item-group>\n      <button ion-item *ngFor="let i of devices" (click)="connectPadlock(i)">\n        <ion-avatar item-start class="avatarIcon">\n          <ion-icon name="lock-circle" class="listIcon" color="primary"></ion-icon>\n        </ion-avatar>\n        <h2>{{i.name}}</h2>\n        <p style="font-size:12px;">{{i.uuid}}</p>\n        <ion-icon style="font-size:35px;color:#2673f8;" name="lock-signal" item-end></ion-icon>\n      </button>\n    </ion-item-group>\n  </ion-list>\n\n  <div class="txtCenter" *ngIf="devices.length==0">\n    <ion-icon name="ios-lock" style="font-size:65px;"></ion-icon>\n    <p style="font-size:15px;">No available devices</p>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/satunol/IONIC/project/blok_personal/src/pages/list-padlock/list-padlock.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_padlock_scanner_padlock_scanner__["a" /* PadlockScannerProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular_platform_platform__["a" /* Platform */]])
], ListPadlockPage);

// note
//tidak detect bluetooth, detect setelah bluetooth dimatikan 
//# sourceMappingURL=list-padlock.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PadlockScannerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_ble__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__padlock_padlock__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let PadlockScannerProvider = class PadlockScannerProvider {
    constructor(ble) {
        this.ble = ble;
    }
    scan(seconds) {
        let uuid = "6e400001-b5a3-f393-e0a9-e50e24dcca9e"; //UUID Service on the padlock
        return this.ble.scan([uuid], seconds).map((peripheral) => {
            let name = peripheral.name;
            let uuid = peripheral.id;
            let value = new __WEBPACK_IMPORTED_MODULE_3__padlock_padlock__["a" /* PadlockProvider */](name, uuid, this.ble);
            return value; //return padlock device
        });
    }
    scanner(seconds) {
        this.ble.enable(); //Bluetooth Enable
        return this.scan(seconds);
    }
};
PadlockScannerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_ble__["a" /* BLE */]])
], PadlockScannerProvider);

//# sourceMappingURL=padlock-scanner.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PadlockProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_ble__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PadlockProvider = class PadlockProvider {
    constructor(name, uuid, ble) {
        this.name = name;
        this.uuid = uuid;
        this.ble = ble;
    }
    stringToBytes(string) {
        var array = new Uint8Array(string.length);
        for (var i = 0, l = string.length; i < l; i++) {
            array[i] = string.charCodeAt(i);
        }
        return array.buffer;
    }
    bytesToString(buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    }
    disconnect() {
        this.ble.disconnect(this.uuid);
    }
    connectPadlock() {
        return this.ble.connect(this.uuid).map(peripheral => {
            this._uuidService = peripheral.characteristics[4].service;
            this._writeCharateristic = peripheral.characteristics[4].characteristic;
            this._notifyCharateristic = peripheral.characteristics[5].characteristic;
            return true;
        }, error => {
            return false;
        });
    }
    connect(pin) {
        return this.connectPadlock();
    }
    batteryNotify() {
        let convert = true;
        return this.ble.startNotification(this.uuid, this._uuidService, this._notifyCharateristic).map((buffer) => {
            let value = this.bytesToString(buffer);
            let adc;
            let battery;
            if (convert) {
                adc = parseInt(value);
                convert = false;
            }
            else {
                battery = parseInt(value);
                convert = true;
            }
            if (adc != undefined) {
                return { adc: adc };
            }
            else if (battery != undefined) {
                return { battery: battery };
            }
        });
    }
    battery(pin) {
        let message = 'BS/';
        let value = this.stringToBytes(message);
        this.ble.write(this.uuid, this._uuidService, this._writeCharateristic, value);
        setTimeout(() => {
            this.ble.write(this.uuid, this._uuidService, this._writeCharateristic, value);
        }, 500);
        return this.batteryNotify();
    }
    unlock(pin) {
        let message = 'KK/';
        let value = this.stringToBytes(message);
        this.ble.write(this.uuid, this._uuidService, this._writeCharateristic, value);
    }
    viewLog(pin, time) {
        var log = [{ user: "Rico", time: "23-03-2018 19:00:00" }];
        var source = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].from(log);
        return source;
    }
};
PadlockProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [String, String, __WEBPACK_IMPORTED_MODULE_1__ionic_native_ble__["a" /* BLE */]])
], PadlockProvider);

//# sourceMappingURL=padlock.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_spinner_dialog__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let PopoverPage = class PopoverPage {
    constructor(navCtrl, navParams, platform, loading, dialog, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loading = loading;
        this.dialog = dialog;
        this.viewCtrl = viewCtrl;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PopoverPage');
    }
    exitApp() {
        this.viewCtrl.dismiss();
        this.dialog.confirm('Are you sure to exit ?', 'Confirm', ['Cancel', 'Ok']).then(index => {
            if (index == 2) {
                this.loading.show('', 'Please Wait ...');
                setTimeout(() => {
                    this.loading.hide();
                    this.platform.exitApp();
                }, 2500);
            }
        });
    }
    navigateSettings() { }
};
PopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-popover',template:/*ion-inline-start:"/home/satunol/IONIC/project/blok_personal/src/pages/popover/popover.html"*/'<ion-list no-lines style="font-size:16px;font-weight:440">\n  <button ion-item (click)="navigateSetting()">Settings</button>\n  <button ion-item (click)="exitApp()">Logout</button>\n</ion-list>\n\n'/*ion-inline-end:"/home/satunol/IONIC/project/blok_personal/src/pages/popover/popover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__["a" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_dialogs__["a" /* Dialogs */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
], PopoverPage);

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__key_settings_key_settings__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_form_equal_validate_form_equal_validate__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let LoginPage = class LoginPage {
    constructor(navCtrl, navParams, formBuilder, app, toast, validateEqual) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.app = app;
        this.toast = toast;
        this.validateEqual = validateEqual;
        this.forms = {
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
        };
        this.selectedSegment = 'signin';
        this.setFormControl(formBuilder);
        this.setErrorConfirm();
        this.validateFormLogin();
    }
    ;
    setFormControl(formBuilder) {
        let validators = {
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'required': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'confirmPassword': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, this.validateEqual.transform('password')])],
        };
        let formControl = {};
        for (let form in this.forms) {
            for (let j of this.forms[form]) {
                formControl[j.name] = validators[j.validator];
            }
            this[form] = formBuilder.group(formControl);
        }
    }
    ;
    setErrorConfirm() {
        this['formSignup'].valueChanges.subscribe(values => {
            if (values['password'] != values['confirm password']) {
                this['formSignup'].get('confirm password').setErrors({ equalTo: true });
            }
            else {
                this['formSignup'].get('confirm password').setErrors(null);
            }
        });
    }
    validateFormLogin() {
        let formControlName = ['username', 'password'];
        this['formSignin'].valueChanges.subscribe(value => {
            for (let name of formControlName) {
                let required = this['formSignin'].get(name).hasError('required');
                let touched = this['formSignin'].controls[name].touched;
                let dirty = this['formSignin'].controls[name].dirty;
                if (required && (touched || dirty)) {
                    this.toast.show(name + ' is required', '2500', 'bottom').subscribe(toast => {
                    });
                }
            }
        });
    }
    signin(event) {
        let nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_3__key_settings_key_settings__["a" /* KeySettingsPage */]);
    }
    ;
    signup(event) {
        console.log(event);
    }
    ;
};
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/home/satunol/IONIC/project/blok_personal/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <div padding>\n      <ion-segment [(ngModel)]="selectedSegment" padding color="light">\n        <ion-segment-button value="signin">\n          <ion-icon name="login" style="font-size:23px;"></ion-icon>\n          &nbsp;&nbsp;Sign in\n        </ion-segment-button>\n        <ion-segment-button value="signup">\n          <ion-icon name="person-add" style="font-size:23px;"></ion-icon>\n          &nbsp;&nbsp;Sign up\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="selectedSegment">\n    <ion-list *ngSwitchCase="\'signin\'" style="padding:15% 5% 0 5%;" no-lines>\n      <div *ngFor="let i of forms[\'formSignin\']" [formGroup]="formSignin">\n        <ion-item style="padding-top:8%;">\n          <ion-label>\n            <ion-icon [name]="i.icon" style="font-size:25px;"></ion-icon>\n          </ion-label>\n          <ion-input [placeholder]="i.name" reverse="false" [type]="i.type" [formControlName]="i.name"></ion-input>\n        </ion-item>\n      </div>\n      <p style="text-align:right; color:rgb(163, 160, 160)">Forgot password ?</p>\n      <div style="padding-top:12%;">\n        <button ion-button block round (click)="signin(formSignin)" [disabled]="formSignin.invalid">SIGN IN</button>\n      </div>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'signup\'" style="padding:8% 5% 0 5%;">\n      <div *ngFor="let i of forms[\'formSignup\']" [formGroup]="formSignup">\n        <ion-item style="padding-top:8%;">\n          <ion-label>\n            <ion-icon [name]="i.icon" style="font-size:25px;"></ion-icon>\n          </ion-label>\n          <ion-input [placeholder]="i.name" [type]="i.type" [formControlName]="i.name"></ion-input>\n        </ion-item>\n        <div class="errMessage">\n          <small *ngIf="formSignup.get(i.name).hasError(\'required\') && (formSignup.controls[i.name].touched || formSignup.controls[i.name].dirty)">*{{i.name}} is required</small>\n          <small *ngIf="formSignup.get(i.name).hasError(\'email\') && !formSignup.get(i.name).hasError(\'required\') && formSignup.controls[i.name].touched">*Enter a valid email</small>\n          <small *ngIf="formSignup.get(i.name).hasError(\'equalTo\') && !formSignup.get(i.name).hasError(\'required\') && formSignup.controls[i.name].touched">*mismatch Password</small>\n        </div>\n      </div>\n      <div style="padding-top:10%;">\n        <button ion-button block round [disabled]="formSignup.invalid" (click)="signup(formSignup)">SIGN UP</button>\n      </div>\n    </ion-list>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/satunol/IONIC/project/blok_personal/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
        __WEBPACK_IMPORTED_MODULE_5__pipes_form_equal_validate_form_equal_validate__["a" /* FormEqualValidatePipe */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeySettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_key_share_key__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_key_register_key__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__unshare_key_unshare_key__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unregister_key_unregister_key__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let KeySettingsPage = class KeySettingsPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listSetting = [
            { title: 'Register master key', icon: 'key2', page: __WEBPACK_IMPORTED_MODULE_3__register_key_register_key__["a" /* RegisterKeyPage */] },
            { title: 'Unregister master key', icon: 'ios-trash', page: __WEBPACK_IMPORTED_MODULE_5__unregister_key_unregister_key__["a" /* UnregisterKeyPage */] },
            { title: 'Share key', icon: 'share', page: __WEBPACK_IMPORTED_MODULE_2__share_key_share_key__["a" /* ShareKeyPage */] },
            { title: 'Unshare key', icon: 'unshare', page: __WEBPACK_IMPORTED_MODULE_4__unshare_key_unshare_key__["a" /* UnshareKeyPage */] },
        ];
    }
    navigateTo(page) {
        this.navCtrl.push(page);
    }
};
KeySettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-key-settings',template:/*ion-inline-start:"/home/satunol/IONIC/project/blok_personal/src/pages/key-settings/key-settings.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Settings key</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Settings\n    </ion-list-header>\n    <button ion-item *ngFor="let i of listSetting" padding (click)="navigateTo(i.page)">\n      <ion-icon [name]="i.icon" item-start color="primary" style="font-size:33px;"></ion-icon>\n      <p style="font-size:16px;color:rgb(48, 46, 46);">{{i.title}}</p>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/satunol/IONIC/project/blok_personal/src/pages/key-settings/key-settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], KeySettingsPage);

//# sourceMappingURL=key-settings.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareKeyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ShareKeyPage = class ShareKeyPage {
    constructor(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    shareTo() {
        let alertConfig = {
            title: 'Share key',
            subtitle: 'Enter the user you want to share key',
            inputs: [{ name: 'User', placeholder: 'Enter name of user', type: 'text' }],
            buttons: { disagree: 'Close', agree: 'Share' }
        };
        this.alert.promptAlert(alertConfig);
    }
    alertResult(event) {
        let loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Please wait ...',
            duration: 2000
        });
        if (event != 'close') {
            loading.present();
        }
        loading.onDidDismiss(() => {
            this.alert.messageAlert({ title: 'Success', subtitle: 'Success to share key' });
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('alert'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__alert_alert__["a" /* AlertPage */])
], ShareKeyPage.prototype, "alert", void 0);
ShareKeyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-share-key',template:/*ion-inline-start:"/home/satunol/IONIC/project/blok_personal/src/pages/share-key/share-key.html"*/'<page-alert #alert (alertResult)="alertResult($event)"></page-alert>\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Share key</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list padding>\n    <ion-item>\n      <ion-label>\n        <ion-icon style="font-size:26px;" name="key2"></ion-icon>\n      </ion-label>\n      <ion-input placeholder="Enter your key"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button outline round block (click)="shareTo()">\n        <ion-icon name="share"></ion-icon>\n        &nbsp;&nbsp;Share to\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/satunol/IONIC/project/blok_personal/src/pages/share-key/share-key.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
], ShareKeyPage);

//# sourceMappingURL=share-key.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterKeyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let RegisterKeyPage = class RegisterKeyPage {
    constructor(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    ionViewDidLeave() {
        this.toast.dismiss();
    }
    ionViewDidLoad() {
        this.toast = this.toastCtrl.create({
            message: 'Press the button padlock to turn on padlock',
            position: 'bottom',
            showCloseButton: true,
        });
        this.toast.present();
    }
};
RegisterKeyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register-key',template:/*ion-inline-start:"/home/satunol/IONIC/project/blok_personal/src/pages/register-key/register-key.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Register key</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row padding>\n      <div id="radar"></div>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-list no-padding>\n          <ion-item-group>\n            <ion-item-divider color="light">\n              <div style="font-size:16px;">\n              <ion-icon name="list"></ion-icon>\n              &nbsp;&nbsp;Padlock\n            </div>\n            </ion-item-divider>\n            <button ion-item>\n              <ion-avatar item-start class="avatarIcon">\n                <ion-icon name="lock-circle" class="listIcon" color="primary"></ion-icon>\n              </ion-avatar>\n              <h2>blok_01</h2>\n              <p style="font-size:12px;">KL:9I:P0</p>\n              <ion-icon style="font-size:35px;" [style.color]="\'gray\'" name="lock-signal" item-end></ion-icon>\n            </button>\n          </ion-item-group>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/satunol/IONIC/project/blok_personal/src/pages/register-key/register-key.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]])
], RegisterKeyPage);

//# sourceMappingURL=register-key.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnshareKeyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let UnshareKeyPage = class UnshareKeyPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = [1, 2, 3, 4, 5];
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad UnshareKeyPage');
    }
};
UnshareKeyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-unshare-key',template:/*ion-inline-start:"/home/satunol/IONIC/project/blok_personal/src/pages/unshare-key/unshare-key.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Unshare key</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let i of user">\n      <ion-icon item-start name="ios-contact-outline" style="font-size:43px;"></ion-icon>\n      <h2>Rainda</h2>\n      <p>Blok_01</p>\n      <button ion-button outline small item-end style="font-size:12px;">\n       unshare\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/satunol/IONIC/project/blok_personal/src/pages/unshare-key/unshare-key.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], UnshareKeyPage);

//# sourceMappingURL=unshare-key.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnregisterKeyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let UnregisterKeyPage = class UnregisterKeyPage {
    constructor(navCtrl, navParams, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    ionViewDidLeave() {
        this.toast.dismiss();
    }
    ionViewDidLoad() {
        this.toast = this.toastCtrl.create({
            message: 'Press the button padlock to turn on padlock',
            position: 'bottom',
            showCloseButton: true
        });
        this.toast.present();
    }
    showAlert() {
        let configAlert = {
            title: 'Unregister Key',
            subtitle: 'Enter master key of padlock to unregister master key to padlock',
            inputs: [{ name: 'key', placeholder: 'Enter Key', type: 'password' }],
            buttons: { disagree: 'Close', agree: 'Unregister' }
        };
        this.alert.promptAlert(configAlert);
    }
    alertResult(event) {
        let configAlert = {
            title: 'Success',
            subtitle: 'Success to unregister master key from padlock'
        };
        let loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Please wait ...',
            duration: 2000
        });
        if (event != 'close') {
            loading.present();
            loading.onDidDismiss(() => {
                this.alert.messageAlert(configAlert);
            });
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('alert'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__alert_alert__["a" /* AlertPage */])
], UnregisterKeyPage.prototype, "alert", void 0);
UnregisterKeyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-unregister-key',template:/*ion-inline-start:"/home/satunol/IONIC/project/blok_personal/src/pages/unregister-key/unregister-key.html"*/'<page-alert (alertResult)="alertResult($event)" #alert></page-alert>\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Unregister key</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item (click)="showAlert()">\n      <ion-avatar item-start class="avatarIcon">\n        <ion-icon name="lock-circle" class="listIcon" color="primary"></ion-icon>\n      </ion-avatar>\n      <h2>blok_01</h2>\n      <p style="font-size:12px;">JK:9L:O9:KJ</p>\n      <ion-icon style="color:gray;font-size:35px;" name="lock-signal" item-end></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/satunol/IONIC/project/blok_personal/src/pages/unregister-key/unregister-key.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
], UnregisterKeyPage);

//# sourceMappingURL=unregister-key.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(381);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_ble__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages_module__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic2_super_tabs__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_padlock_scanner_padlock_scanner__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_padlock_padlock__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__ = __webpack_require__(706);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                modalEnter: 'modal-slide-in',
                scrollPadding: false,
                scrollAssist: true,
                autoFocusAssist: false
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_8_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_5__pages_pages_module__["a" /* PagesModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_padlock_scanner_padlock_scanner__["a" /* PadlockScannerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_padlock_padlock__["a" /* PadlockProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_ble__["a" /* BLE */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen) {
        this.rootPage = { root: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], params: { rootTabs: 'homeTabs' } };
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            platform.registerBackButtonAction(() => {
                platform.exitApp();
            });
            statusBar.backgroundColorByHexString('#2673f8');
            statusBar.styleLightContent();
            splashScreen.hide();
        });
    }
};
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/satunol/IONIC/project/blok_personal/src/app/app.html"*/'<ion-nav [root]="rootPage.root" [rootParams]="rootPage.params"></ion-nav>\n'/*ion-inline-end:"/home/satunol/IONIC/project/blok_personal/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AlertPage = class AlertPage {
    constructor(alert) {
        this.alert = alert;
        this.alertResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
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
                        this.alertResult.emit('close');
                    }
                },
                {
                    text: config.buttons['agree'],
                    handler: data => {
                        for (let i of config.inputs) {
                            this.alertResult.emit(data[i.name]);
                        }
                    }
                }
            ]
        });
        prompt.present();
    }
    messageAlert(config) {
        let prompt = this.alert.create({
            title: config.title,
            message: config.subtitle,
            buttons: ['Ok']
        });
        prompt.present();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AlertPage.prototype, "alertResult", void 0);
AlertPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-alert',
        template: '',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AlertPage);

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_pin_change_pin__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_popover__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_log_view_log__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_padlock_list_padlock__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__key_settings_key_settings__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__share_key_share_key__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_key_register_key__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__unshare_key_unshare_key__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__unregister_key_unregister_key__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_svg_round_progressbar__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic2_super_tabs__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_toast__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_dialogs__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_spinner_dialog__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_date_picker__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/*Pages*/













/*Module*/


/*Native*/




let PagesModule = PagesModule_1 = class PagesModule {
};
PagesModule = PagesModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__change_pin_change_pin__["a" /* ChangePinPage */],
            __WEBPACK_IMPORTED_MODULE_4__alert_alert__["a" /* AlertPage */],
            __WEBPACK_IMPORTED_MODULE_5__popover_popover__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__view_log_view_log__["a" /* ViewlogPage */],
            __WEBPACK_IMPORTED_MODULE_9__list_padlock_list_padlock__["a" /* ListPadlockPage */],
            __WEBPACK_IMPORTED_MODULE_10__tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__key_settings_key_settings__["a" /* KeySettingsPage */],
            __WEBPACK_IMPORTED_MODULE_12__share_key_share_key__["a" /* ShareKeyPage */],
            __WEBPACK_IMPORTED_MODULE_13__register_key_register_key__["a" /* RegisterKeyPage */],
            __WEBPACK_IMPORTED_MODULE_14__unshare_key_unshare_key__["a" /* UnshareKeyPage */],
            __WEBPACK_IMPORTED_MODULE_15__unregister_key_unregister_key__["a" /* UnregisterKeyPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(PagesModule_1),
            __WEBPACK_IMPORTED_MODULE_16_angular_svg_round_progressbar__["RoundProgressModule"],
            __WEBPACK_IMPORTED_MODULE_17_ionic2_super_tabs__["a" /* SuperTabsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__change_pin_change_pin__["a" /* ChangePinPage */],
            __WEBPACK_IMPORTED_MODULE_4__alert_alert__["a" /* AlertPage */],
            __WEBPACK_IMPORTED_MODULE_5__popover_popover__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__view_log_view_log__["a" /* ViewlogPage */],
            __WEBPACK_IMPORTED_MODULE_9__list_padlock_list_padlock__["a" /* ListPadlockPage */],
            __WEBPACK_IMPORTED_MODULE_10__tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__key_settings_key_settings__["a" /* KeySettingsPage */],
            __WEBPACK_IMPORTED_MODULE_12__share_key_share_key__["a" /* ShareKeyPage */],
            __WEBPACK_IMPORTED_MODULE_13__register_key_register_key__["a" /* RegisterKeyPage */],
            __WEBPACK_IMPORTED_MODULE_14__unshare_key_unshare_key__["a" /* UnshareKeyPage */],
            __WEBPACK_IMPORTED_MODULE_15__unregister_key_unregister_key__["a" /* UnregisterKeyPage */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_dialogs__["a" /* Dialogs */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_date_picker__["a" /* DatePicker */]
        ]
    })
], PagesModule);

var PagesModule_1;
//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__string_to_bytes_string_to_bytes__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bytes_to_string_bytes_to_string__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_equal_validate_form_equal_validate__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let PipesModule = class PipesModule {
};
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__string_to_bytes_string_to_bytes__["a" /* StringToBytesPipe */],
            __WEBPACK_IMPORTED_MODULE_2__bytes_to_string_bytes_to_string__["a" /* BytesToStringPipe */],
            __WEBPACK_IMPORTED_MODULE_3__form_equal_validate_form_equal_validate__["a" /* FormEqualValidatePipe */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__string_to_bytes_string_to_bytes__["a" /* StringToBytesPipe */],
            __WEBPACK_IMPORTED_MODULE_2__bytes_to_string_bytes_to_string__["a" /* BytesToStringPipe */],
            __WEBPACK_IMPORTED_MODULE_3__form_equal_validate_form_equal_validate__["a" /* FormEqualValidatePipe */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__form_equal_validate_form_equal_validate__["a" /* FormEqualValidatePipe */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringToBytesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the StringToBytesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
let StringToBytesPipe = class StringToBytesPipe {
    /**
     * Takes a value and makes it lowercase.
     */
    transform(value) {
        var array = new Uint8Array(value.length);
        for (var i = 0, l = value.length; i < l; i++) {
            array[i] = value.charCodeAt(i);
        }
        return array.buffer;
    }
};
StringToBytesPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'stringToBytes',
    })
], StringToBytesPipe);

//# sourceMappingURL=string-to-bytes.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BytesToStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the BytesToStringPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
let BytesToStringPipe = class BytesToStringPipe {
    /**
     * Takes a value and makes it lowercase.
     */
    transform(buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    }
};
BytesToStringPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'bytesToString',
    })
], BytesToStringPipe);

//# sourceMappingURL=bytes-to-string.js.map

/***/ })

},[376]);
//# sourceMappingURL=main.js.map