webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.signupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\login\login.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{"sign_in" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <img src="assets/imgs/logo.png" class="logo">\n\n    <div padding>\n\n        <ion-list class="form">\n\n            <ion-item class="bg-light">\n\n                <ion-label>{{"username" | translate}}</ion-label>\n\n                <ion-input type="text" value="+91 9876543210" text-end></ion-input>\n\n            </ion-item>\n\n            <ion-item class="bg-light">\n\n                <ion-label>{{"password" | translate}}</ion-label>\n\n                <ion-input type="password" value="*******" text-end></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button full class="bg-green text-white btn round shadow-green" (click)="homePage()" text-uppercase>{{"login" | translate}}</button>\n\n    </div>\n\n\n\n    <ion-row padding-start padding-end>\n\n      <ion-col (click)="signupPage()">\n\n        <small>{{"new_user" | translate}} <strong class="text-green">{{"sign_up" | translate}}</strong></small>\n\n      </ion-col>\n\n      <ion-col text-end>\n\n        <small>{{"forgot" | translate}} <strong class="text-green">{{"password" | translate}}?</strong></small>\n\n      </ion-col>\n\n    </ion-row>\n\n    <p padding text-center class="option-login"><span>{{"or_continue_with" | translate}}</span></p>\n\n    <ion-row padding-left padding-right>\n\n      <ion-col>\n\n        <button ion-button full icon-start class="bg-blue text-white btn round shadow-blue">\n\n          <ion-icon name="logo-facebook"></ion-icon>\n\n          {{"facebook" | translate}}\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button full icon-start class="bg-white text-dark btn round shadow-black">\n\n          <ion-icon name="logo-googleplus"></ion-icon>\n\n          {{"google" | translate}}\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferralcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReferralcodePage = /** @class */ (function () {
    function ReferralcodePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    ReferralcodePage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ReferralcodePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReferralcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-referralcode',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\referralcode\referralcode.html"*/'<!--\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Referral Code</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n-->\n\n\n\n<ion-content padding>\n\n    <h1 text-right>\n\n        <ion-icon class="text-white" name="md-close" (click)="dismiss()"></ion-icon>\n\n    </h1>\n\n    <ion-card>\n\n        <img src="assets/imgs/menu-bg.png" />\n\n        <ion-card-content>\n\n            <div padding-top padding-right padding-left>\n\n                <ion-card-title class="text-green">\n\n                    Do you have any referral code?\n\n                </ion-card-title>\n\n                <p padding-top>\n\n                    Add referral code and get your <br> first cab ride free.\n\n                </p>\n\n                <ion-list class="form">\n\n                    <ion-item class="bg-light">\n\n                        <ion-input type="text" value="Add 6 digit referral code" class="text-light"></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n                <p><strong class="text-black">I Dont\'have </strong><strong class="text-green" style="float: right;" (click)="homePage()">Continue</strong></p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\referralcode\referralcode.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], ReferralcodePage);
    return ReferralcodePage;
}());

//# sourceMappingURL=referralcode.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BaseAppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]("app.config");
var BaseAppConfig = {
    apiBase: "http://opuslabs.in:9067/wp-json/",
    perPage: "5",
    consumerKey: "ck_bd34fc373c15b8092269895d9f24fdafd75901bc",
    consumerSecret: "cs_a3424b5ca1754293e4c8668b614f1768c0e859ab",
    adminUsername: "prashant",
    adminPassword: "prashant243",
    oneSignalAppiId: "c26a7c6d-25a1-451d-9eea-f790790b11b9",
    oneSignalGpId: "968366107124",
    homeSliderPostsTagId: "95",
    availableLanguages: [{
            code: 'en',
            name: 'English'
        }, {
            code: 'ar',
            name: 'Arabic'
        }, {
            code: 'es',
            name: 'Spanish'
        }, {
            code: 'pt',
            name: 'Portuguese'
        }, {
            code: 'ru',
            name: 'Russian'
        }, {
            code: 'fr',
            name: 'French'
        }],
    firebaseConfig: {
        webApplicationId: "511052243603-tti40jbrr3ukb2t3abebcesl510ql099.apps.googleusercontent.com",
        apiKey: "AIzaSyBg3aFpqNbi0kp3maAanCXeWXXF_PGEXuI",
        authDomain: "mobimall-f924b.firebaseapp.com",
        databaseURL: "https://mobimall-f924b.firebaseio.com",
        projectId: "mobimall-f924b",
        storageBucket: "mobimall-f924b.appspot.com",
        messagingSenderId: "511052243603"
    }
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choosecab_choosecab__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocationPage = /** @class */ (function () {
    function LocationPage(translate, navCtrl, geolocation, androidPermissions) {
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.androidPermissions = androidPermissions;
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        var latLng = new google.maps.LatLng(20.5937, 78.9629);
        this.loadMap(latLng);
        this.getAndPlotCurrentLocation();
    };
    LocationPage.prototype.getAndPlotCurrentLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.loadMap(latLng);
        }, function (err) {
            console.log(err);
        });
    };
    LocationPage.prototype.loadMap = function (latLng) {
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    LocationPage.prototype.choosecabPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__choosecab_choosecab__["a" /* ChoosecabPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LocationPage.prototype, "mapElement", void 0);
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\location\location.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <!--        <ion-title>location</ion-title>-->\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div #map id="map" class="mymap"></div>\n\n  <ion-card class="shadow-black">\n\n    <ion-card-content>\n\n      <div class="shadow-black border-radius">\n\n        <ion-row>\n\n          <ion-col class="location-icon">\n\n            <strong class="bg-green"></strong>\n\n          </ion-col>\n\n          <ion-col class="pad-0">\n\n            <ion-item class="bg-white border-bottom">\n\n              <!-- <ion-label text-right>From</ion-label> -->\n\n              <ion-input type="text" class="" placeholder="{{\'location_from\' | translate}}"></ion-input>\n\n              <ion-icon name="md-locate" class="text-black"></ion-icon>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col class="location-icon">\n\n            <strong class="bg-yellow"></strong>\n\n          </ion-col>\n\n          <ion-col class="pad-0">\n\n            <ion-item class="bg-white">\n\n              <!--  <ion-label text-right>To</ion-label> -->\n\n              <ion-input type="text" class="" placeholder="{{\'location_to\' | translate}}"></ion-input>\n\n              <ion-icon name="md-locate" class="text-black"></ion-icon>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <div class="past-location" padding-top>\n\n        <ion-list>\n\n          <ion-item class="text-light">\n\n            <p>\n\n              <ion-icon name="time" padding-right></ion-icon>\n\n                James Avenue, Nj\n\n            </p>\n\n          </ion-item>\n\n          <ion-item class="text-light">\n\n            <p>\n\n              <ion-icon name="time" padding-right></ion-icon>\n\n                James Avenue, Nj\n\n            </p>\n\n          </ion-item>\n\n          <ion-item class="text-light">\n\n            <p>\n\n              <ion-icon name="time" padding-right></ion-icon>\n\n                James Avenue, Nj\n\n            </p>\n\n          </ion-item>\n\n        </ion-list>\n\n      </div>\n\n	    <button ion-button full class="bg-green text-white btn round shadow-green" (click)="choosecabPage()">{{"continue" | translate}}</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\location\location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosecabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChoosecabPage = /** @class */ (function () {
    function ChoosecabPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChoosecabPage.prototype.schedulePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__schedule_schedule__["a" /* SchedulePage */]);
    };
    ChoosecabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choosecab',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\choosecab\choosecab.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <div class="drop">\n\n      <span class="text-black">Symmit\n\n        <ion-icon  padding-left name="ios-arrow-forward"></ion-icon>\n\n      </span>\n\n    </div>\n\n    <div class="pickup">\n\n      <span class="text-black">Newark\n\n        <ion-icon  padding-left name="ios-arrow-forward"></ion-icon>\n\n      </span>\n\n    </div>\n\n    <div class="card-box">\n\n      <ion-card class="text-black">\n\n        <ion-card-header>\n\n          <small text-left class="mr-a"> \n\n            <ion-icon padding-right name="md-card" class="text-green"></ion-icon>\n\n             {{\'cash\' | translate}}\n\n          </small>\n\n          <span text-center class="mx-a">{{"choose_cab_type" | translate}}</span>\n\n          <small text-right class="ml-a">\n\n            <ion-icon padding-right name="md-person-add" class=text-green></ion-icon>\n\n              1\n\n          </small>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <div class="cab-scroll bg-white">\n\n            <div class="cab-container">\n\n              <div class="cab-type">\n\n                <div class="img-box">\n\n                  <img src="assets/imgs/car-1.png">\n\n                  <ion-badge item-end class="bg-green">2 {{"mins" | translate}}</ion-badge>\n\n                </div>\n\n                <h4 class="text-black ">GoShare</h4>\n\n                <small class="text-light ">$45 - $50</small>\n\n              </div>\n\n              <div class="cab-type">\n\n                <div class="img-box active">\n\n                  <img src="assets/imgs/car-1.png">\n\n                  <ion-badge item-end class="bg-green">2 {{"mins" | translate}}</ion-badge>\n\n                </div>\n\n                <h4 class="text-black ">GoMeOnly</h4>\n\n                <small class="text-light ">$45 - $50</small>\n\n              </div>\n\n              <div class="cab-type ">\n\n                <div class="img-box">\n\n                  <img src="assets/imgs/car-1.png">\n\n                  <ion-badge item-end class="bg-green">2 {{"mins" | translate}}</ion-badge>\n\n                </div>\n\n                <h4 class="text-black ">GoBigger</h4>\n\n                <small class="text-light ">$45 - $50</small>\n\n              </div>\n\n              <div class="cab-type ">\n\n                <div class="img-box">\n\n                  <img src="assets/imgs/car-1.png">\n\n                  <ion-badge item-end class="bg-green">2 {{"mins" | translate}}</ion-badge>\n\n                </div>\n\n                <h4 class="text-black">GoFast</h4>\n\n                <small class="text-light ">$45 - $50</small>\n\n              </div>\n\n              <div class="cab-type ">\n\n                <div class="img-box">\n\n                  <img src="assets/imgs/car-1.png">\n\n                  <ion-badge item-end class="bg-green">2 {{"mins" | translate}}</ion-badge>\n\n                </div>\n\n                <h4 class="text-black ">GoShare</h4>\n\n                <small class="text-light ">$45 - $50</small>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <ion-row padding-left padding-right>\n\n            <ion-col col-2>\n\n              <button ion-button full class="bg-green  shadow-green full"> <ion-icon name="md-time"></ion-icon></button>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n              <button ion-button full class="bg-green shadow-green full" (click)="schedulePage()">{{"request_cab" | translate}}</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\choosecab\choosecab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ChoosecabPage);
    return ChoosecabPage;
}());

//# sourceMappingURL=choosecab.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookride_bookride__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchedulePage = /** @class */ (function () {
    function SchedulePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SchedulePage.prototype.bookridePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bookride_bookride__["a" /* BookridePage */]);
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\schedule\schedule.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu" ></ion-icon>\n\n    </button>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="bg-img">\n\n    <div class="drop">\n\n      <span class="text-black">Symmit\n\n        <ion-icon  padding-left name="ios-arrow-forward"></ion-icon>\n\n      </span>\n\n    </div>\n\n    <div class="pickup">\n\n      <span class="text-black">Newark\n\n        <ion-icon  padding-left name="ios-arrow-forward"></ion-icon>\n\n      </span>\n\n    </div>\n\n    <div class="card-box">\n\n      <ion-card text-center class="text-black">\n\n        <ion-card-header text-center class="text-black">\n\n          {{"schedule_pick" | translate}}\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <small class="text-light">{{"select_date" | translate}}</small>\n\n          <h2 padding-bottom class="fw-5">September 17,Sunday</h2>\n\n          <small class="text-light">{{"select_time" | translate}}</small>\n\n          <h2 padding-bottom class="fw-5">05:00 pm</h2>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <button ion-button full style="float: left;" class="text-green bg-white shadow-black full">{{"cancel" | translate}}</button>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <button ion-button full class="shadow-green bg-green full" style="float: right;" (click)="bookridePage()">{{"confirm" | translate}}</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\schedule\schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ridefullinfo_ridefullinfo__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookridePage = /** @class */ (function () {
    function BookridePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BookridePage.prototype.ridefullinfoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ridefullinfo_ridefullinfo__["a" /* RidefullinfoPage */]);
    };
    BookridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookride',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\bookride\bookride.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="bg-img">\n\n    <div class="drop">\n\n      <span class="text-black">Symmit\n\n        <ion-icon  padding-left name="ios-arrow-forward"></ion-icon>\n\n      </span>\n\n    </div>\n\n    <div class="pickup">\n\n      <span class="text-black">Newark\n\n        <ion-icon  padding-left name="ios-arrow-forward"></ion-icon>\n\n      </span>\n\n    </div>\n\n    <div class="card-box">\n\n      <ion-card class="text-black">\n\n        <ion-card-header>\n\n          <small float-left class="text-light">{{"driver_info" | translate}}</small>\n\n          <small float-right class="text-green">{{"cancel_ride" | translate}}</small>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <div class="menu heading">\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-avatar item-start>\n\n                  <img src="assets/imgs/fare.png">\n\n                </ion-avatar>\n\n                <h2 class="text-black">\n\n                  Tarun Kumar\n\n                  <ion-icon float-right name="ios-arrow-forward"></ion-icon>\n\n                </h2>\n\n                <p class="text-black">4.7\n\n                  <span class="rateing">\n\n                  <ion-icon name="star" class="text-green"></ion-icon>\n\n                  <ion-icon name="star" class="text-green"></ion-icon>\n\n                  <ion-icon name="star" class="text-green"></ion-icon>\n\n                  <ion-icon name="star" class="text-green"></ion-icon>\n\n                  <ion-icon name="star" class="text-green"></ion-icon>\n\n                  </span>\n\n                </p>\n\n              </ion-item>\n\n            </ion-list>\n\n          </div>\n\n          <ion-row padding class="car-details">\n\n            <ion-col>\n\n              <small class="text-light">{{"select_date" | translate}}</small>\n\n              <strong class="text-black">DL1 ZA 5887</strong>\n\n            </ion-col>\n\n            <ion-col>\n\n              <small class="text-light">{{"select_date" | translate}}</small>\n\n              <strong class="text-black">DL1 ZA 5887</strong>\n\n            </ion-col>\n\n          </ion-row>\n\n          <div text-center padding-left padding-right>\n\n            <button ion-button full class="bg-green full" (click)="ridefullinfoPage()">{{"cntact" | translate}}</button>\n\n\n\n            <ion-icon name="ios-arrow-down" class="text-light" (click)="ridefullinfoPage()"></ion-icon>\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\bookride\bookride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], BookridePage);
    return BookridePage;
}());

//# sourceMappingURL=bookride.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RidefullinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farerate_farerate__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RidefullinfoPage = /** @class */ (function () {
    function RidefullinfoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RidefullinfoPage.prototype.fareratePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__farerate_farerate__["a" /* FareratePage */]);
    };
    RidefullinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ridefullinfo',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\ridefullinfo\ridefullinfo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" ></ion-icon>\n\n    </button>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n  <div class="card-box">\n\n    <ion-card class="text-black">\n\n      <ion-card-header>\n\n        <small float-left class="text-black">{{"driver_info" | translate}}</small>\n\n        <small float-right class="text-green">{{"cancel_ride" | translate}}</small>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <div class="menu heading">\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-avatar item-start>\n\n                <img src="assets/imgs/fare.png">\n\n              </ion-avatar>\n\n              <h2 class="text-black">\n\n                Tarun Kumar\n\n                <ion-icon float-right name="ios-arrow-forward"></ion-icon>\n\n              </h2>\n\n              <p class="text-black">4.7\n\n                <span class="rateing">\n\n                <ion-icon name="star" class="text-green"></ion-icon>\n\n                <ion-icon name="star" class="text-green"></ion-icon>\n\n                <ion-icon name="star" class="text-green"></ion-icon>\n\n                <ion-icon name="star" class="text-green"></ion-icon>\n\n                <ion-icon name="star" class="text-green"></ion-icon>\n\n                </span>\n\n              </p>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n        <ion-row padding class="car-details">\n\n          <ion-col>\n\n            <small class="text-light">Hyundai Wargon</small>\n\n            <strong class="text-black">DL1 ZA 5887</strong>\n\n          </ion-col>\n\n          <ion-col text-right>\n\n            <small class="text-light">{{"arriving_in" | translate}}</small>\n\n            <strong class="text-black">04 {{"mins" | translate}}</strong>\n\n          </ion-col>\n\n        </ion-row>\n\n        <div text-center padding-left padding-right padding-bottom>\n\n          <button ion-button full class="bg-green full" (click)="fareratePage()">{{"cntact" | translate}}</button>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n  <div class="trip-info">\n\n    <div class="card-box">\n\n      <ion-card class="text-black">\n\n        <ion-card-header>\n\n          <small float-left class="text-black">{{"trip_info" | translate}}</small>\n\n        </ion-card-header>\n\n        <ion-card-content padding-left padding-right>\n\n          <ion-row>\n\n            <ion-col col-2>\n\n              <div class="">\n\n                <div class="active-stage">\n\n                  <span class="col-1"><strong class="bg-green"></strong></span>\n\n                  <span class="col-2"></span>\n\n                  <span class="col-3"><strong class="bg-yellow"></strong></span>\n\n                </div>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n              <ion-list class="form">\n\n                <ion-item class="">\n\n                  <small class="text-light">{{"from" | translate}}</small>\n\n                  <h6 class="">Newark Ave,Journal Square,Nj</h6>\n\n                </ion-item>\n\n                <ion-item class="">\n\n                  <small class="text-light">{{"to" | translate}}</small>\n\n                  <h6 class="text-black">Sid Ave,Journal Square,Nj</h6>\n\n                </ion-item>\n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row padding-left padding-right padding-bottom class="car-details">\n\n            <ion-col>\n\n              <small class="text-light">{{"distance" | translate}}</small>\n\n              <strong class="text-black">08 km</strong>\n\n            </ion-col>\n\n            <ion-col>\n\n              <div text-left>\n\n                <small class="text-light">{{"arrivial" | translate}}</small>\n\n                <strong class="text-black">12:38 pm</strong>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="payment">\n\n    <div class="card-box">\n\n      <ion-card class="text-black">\n\n        <ion-card-content>\n\n          <ion-row class="" padding>\n\n            <ion-col>\n\n              <small class="text-light">Payment</small>\n\n              <br>\n\n              <strong class="text-black">Debit Card</strong>\n\n            </ion-col>\n\n            <ion-col text-right>\n\n              <small class="text-black">$70.00</small>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\ridefullinfo\ridefullinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RidefullinfoPage);
    return RidefullinfoPage;
}());

//# sourceMappingURL=ridefullinfo.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FareratePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FareratePage = /** @class */ (function () {
    function FareratePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FareratePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-farerate',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\farerate\farerate.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"receipt" | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="bg-white recipt" text-center>\n\n      <h6>{{"fare_summery" | translate}}</h6>\n\n      <div class="outline bg-green"></div>\n\n\n\n      <h1 class="text-black">$23.00</h1>\n\n      <p>22 Oct, 2017, 12:30</p>\n\n\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/imgs/fare.png">\n\n          </ion-avatar>\n\n          <p class="text-black">{{"rate_now" | translate}}</p>\n\n          <h2 class="text-black"><strong>TARUN KUMAR</strong></h2>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div class="rateing" padding margin text-center>\n\n      <ion-icon name="star" class=""></ion-icon>\n\n      <ion-icon name="star" class=""></ion-icon>\n\n      <ion-icon name="star" class=""></ion-icon>\n\n      <ion-icon name="star" class=""></ion-icon>\n\n      <ion-icon name="star" class=""></ion-icon>\n\n    </div>\n\n    <div padding-left padding-right margin>\n\n      <button ion-button full class="bg-red text-white btn round shadow-red">{{"submit_rating" | translate}}</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\farerate\farerate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], FareratePage);
    return FareratePage;
}());

//# sourceMappingURL=farerate.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_verification__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage.prototype.verificationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__verification_verification__["a" /* VerificationPage */]);
    };
    SignupPage.prototype.loginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\signup\signup.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Sign Up</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <img src="assets/imgs/logo.png" class="logo">\n\n    <div class="active-stage" padding>\n\n        <ion-row text-center>\n\n            <ion-col><span class="col-1"><strong class="bg-green"></strong></span></ion-col>\n\n            <ion-col><span class=""><strong class="bg-light"></strong></span></ion-col>\n\n            <ion-col><span class="col-3"><strong class="bg-light"></strong></span></ion-col>\n\n        </ion-row>\n\n    </div>\n\n    <div>\n\n        <ion-row class="rows">\n\n            <ion-col col-3 text-center>\n\n                <div class="bg-light form camra mb-1">\n\n                    <ion-icon name="camera" class="text-light"></ion-icon>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-9>\n\n                <ion-list class="form mb-1">\n\n                    <ion-item class="bg-light">\n\n                        <ion-label>First Name</ion-label>\n\n                        <ion-input type="text" value="Tarun" text-right></ion-input>\n\n                    </ion-item>\n\n                    <ion-item class="bg-light">\n\n                        <ion-label>Last Name</ion-label>\n\n                        <ion-input type="text" value="Kumar" text-right></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n        <ion-list class="form">\n\n            <!--\n\n<ion-item class="bg-light">\n\n    <ion-label>Username</ion-label>\n\n    <ion-input type="text" value="+91 9876543210" text-right></ion-input>\n\n</ion-item>\n\n-->\n\n            <ion-item class="bg-light">\n\n                <ion-label>Create Password</ion-label>\n\n                <ion-input type="password" value="*******" text-right></ion-input>\n\n            </ion-item>\n\n            <ion-item class="bg-light">\n\n                <ion-label>Confirm Password</ion-label>\n\n                <ion-input type="password" value="*******" text-right></ion-input>\n\n            </ion-item>\n\n            <ion-item class="bg-light">\n\n                <ion-label>Phone number</ion-label>\n\n                <ion-input type="text" value="+91 9876543210" text-right></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button full class="bg-green text-white btn round shadow-green" (click)="verificationPage()">SIGN UP NOW</button>\n\n    </div>\n\n\n\n    <ion-row padding text-center>\n\n        <ion-col (click)="loginPage()">Already registered? <strong class="text-green">Sign in</strong></ion-col>\n\n    </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addcard_addcard__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerificationPage = /** @class */ (function () {
    function VerificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VerificationPage.prototype.addcardPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addcard_addcard__["a" /* AddcardPage */]);
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\verification\verification.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Verification</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <img src="assets/imgs/logo.png" class="logo">\n\n    <div class="active-stage" padding>\n\n        <ion-row text-center>\n\n            <ion-col><span class="col-1"><strong class="bg-green"></strong></span></ion-col>\n\n            <ion-col><span class=""><strong class="bg-green"></strong></span></ion-col>\n\n            <ion-col><span class="col-3"><strong class="bg-light"></strong></span></ion-col>\n\n        </ion-row>\n\n    </div>\n\n    <br>\n\n    <p text-center padding>Enter confirmation code<br>sent to you on your SMS!</p>\n\n    <div padding-top>\n\n        <ion-list class="form">\n\n            <ion-item class="bg-light">\n\n                <ion-input type="text" value="6543210" text-center></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button full class="bg-green text-white btn round shadow-green" (click)="addcardPage()">NEXT</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\verification\verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__referralcode_referralcode__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddcardPage = /** @class */ (function () {
    function AddcardPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    AddcardPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AddcardPage.prototype.referralcodePage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__referralcode_referralcode__["a" /* ReferralcodePage */]);
        modal.present();
    };
    AddcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addcard',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\addcard\addcard.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n            SIGN UP\n\n            <small float-right padding-right (click)="homePage()">Skip</small>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <img src="assets/imgs/logo.png" class="logo">\n\n    <div class="active-stage" padding>\n\n        <ion-row text-center>\n\n            <ion-col><span class="col-1"><strong class="bg-green"></strong></span></ion-col>\n\n            <ion-col><span class=""><strong class="bg-green"></strong></span></ion-col>\n\n            <ion-col><span class="col-3"><strong class="bg-green"></strong></span></ion-col>\n\n        </ion-row>\n\n    </div>\n\n    <br>\n\n    <div padding><img src="assets/imgs/atm_card.png" alt="atm_card">\n\n    </div>\n\n\n\n    <div>\n\n\n\n        <ion-list class="form mb-1">\n\n            <ion-item class="bg-light">\n\n                <ion-label>Card Number</ion-label>\n\n                <ion-input type="text" value="5886 1121 2254 2142" text-right></ion-input>\n\n            </ion-item>\n\n            <ion-row>\n\n                <ion-col col-6 style="border-right: 0.55px solid #c8c7cc;">\n\n                    <ion-item class="bg-light">\n\n                        <ion-label>Expiry Date</ion-label>\n\n                        <ion-input type="text" value="12/25" text-right></ion-input>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <ion-item class="bg-light">\n\n                        <ion-label>Expiry Date</ion-label>\n\n                        <ion-input type="text" value="12/25" text-right></ion-input>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-list>\n\n\n\n        <button ion-button full class="bg-green text-white btn round shadow-green" (click)="referralcodePage()">ADD CARD</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\addcard\addcard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], AddcardPage);
    return AddcardPage;
}());

//# sourceMappingURL=addcard.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"payments" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <p class="text-light" padding>{{"pmt_method" | translate}}</p>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/icon_cash.png">\n\n            </ion-avatar>\n\n            <h1><strong>{{"cash" | translate}}</strong></h1>\n\n            <p class="text-light"><small>{{"payment_info" | translate}}</small></p>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/icon_card.png">\n\n            </ion-avatar>\n\n            <h1><strong>{{"cards" | translate}}</strong></h1>\n\n            <p class="text-light"><small>{{"cards_info" | translate}}</small></p>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/icon-paytm.png">\n\n            </ion-avatar>\n\n            <h1><strong>{{"paytm" | translate}}</strong></h1>\n\n            <p class="text-light"><small>{{"paytm_info" | translate}}</small></p>\n\n        </ion-item>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\help\help.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>{{"help1" | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <p class="text-light" padding>{{"chose_isue" | translate}}</p>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1><strong>{{"trips_and_fare" | translate}}</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            <small>{{"trips_fare_issue" | translate}}</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1><strong>{{"payment" | translate}}</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            <small>{{"payment_issue" | translate}}</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1><strong>{{"app_usability" | translate}}</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            <small>{{"app_issue" | translate}}</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1><strong>{{"account" | translate}}</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            <small>{{"account_issue" | translate}}</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\profile\profile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="top-side">\n\n        <img src="assets/imgs/menu-bg.png">\n\n        <div class="icon-box">\n\n            <ion-icon name="md-create" class="bg-green text-white icon"></ion-icon>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="form" padding-right padding-left padding-top>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label floating>Fast Name</ion-label>\n\n                <ion-input type="text" value="Sumit" readonly></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>Last Name</ion-label>\n\n                <ion-input type="text" value="Kumar" readonly></ion-input>\n\n            </ion-item>\n\n            <div class="d-flex">\n\n                <ion-item>\n\n                    <ion-label floating>Contact Number</ion-label>\n\n                    <ion-input type="text" value="+91 964 148 6000" readonly></ion-input>\n\n                </ion-item>\n\n                <div class="checkmark text-right">\n\n                    <ion-icon name="ios-checkmark-circle" class="text-green"></ion-icon>\n\n                </div>\n\n            </div>\n\n            <div class="d-flex">\n\n                <ion-item>\n\n                    <ion-label floating>Email Address</ion-label>\n\n                    <ion-input type="text" value="cabber@email.com" readonly></ion-input>\n\n                </ion-item>\n\n                <div class="checkmark text-right">\n\n                    <ion-icon name="ios-close-circle" class="text-red"></ion-icon>\n\n                </div>\n\n            </div>\n\n            <ion-item>\n\n                <ion-label floating>Password</ion-label>\n\n                <ion-input type="text" value="* * * * * *" readonly></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MytripsPage = /** @class */ (function () {
    function MytripsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab = "past";
    }
    MytripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mytrips',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\mytrips\mytrips.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{"my_trips" | translate}}</ion-title>\n\n  </ion-navbar>\n\n  <div class="bg-green">\n\n    <ion-segment [(ngModel)]="tab" padding-left padding-right>\n\n      <ion-segment-button value="past" class="text-white">\n\n        {{"past" | translate}}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="upcoming" class="text-white">\n\n        {{"upcoming" | translate}}\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n  <div [ngSwitch]="tab">\n\n    <ion-list *ngSwitchCase="\'past\'">\n\n      <ion-card>\n\n        <div class="img-box">\n\n            <img src="assets/imgs/map.png" />\n\n        </div>\n\n        <ion-card-content>\n\n          <p class="text-black">{{"today" | translate}} 8:21 am <span float-right>$85 <span class="text-light">-</span> $95 </span>\n\n          </p>\n\n          <p class="text-light">Suzuki Swift Dezire<span float-right>{{"cash" | translate}} <span class="text-black">{{"paid" | translate}}</span></span>\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-card>\n\n        <div class="img-box">\n\n          <img src="assets/imgs/map.png" />\n\n        </div>\n\n        <ion-card-content>\n\n          <p class="text-black">{{"today" | translate}} 2:45 pm <span float-right>$65.00</span>\n\n          </p>\n\n          <p class="text-light">Hyundai xcent<span float-right>{{"credit" | translate}} <span class="text-black">{{"paid" | translate}}</span></span>\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-card>\n\n        <div class="img-box">\n\n          <img src="assets/imgs/map.png" />\n\n        </div>\n\n        <ion-card-content>\n\n          <p class="text-black">{{"today" | translate}} 2:45 pm <span float-right>$65.00</span>\n\n          </p>\n\n          <p class="text-light">Hyundai xcent\n\n            <span float-right>{{"credit" | translate}} \n\n              <span class="text-black">{{"paid" | translate}}</span>\n\n            </span>\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'upcoming\'">\n\n      <ion-card>\n\n        <div class="img-box">\n\n          <img src="assets/imgs/map.png" />\n\n        </div>\n\n        <ion-card-content>\n\n          <p class="text-black">{{"today" | translate}} 2:45 pm <span float-right>$65.00</span>\n\n          </p>\n\n          <p class="text-light">Hyundai xcent<span float-right>{{"credit" | translate}} <span class="text-black">{{"paid" | translate}}</span></span>\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-card>\n\n        <div class="img-box">\n\n          <img src="assets/imgs/map.png" />\n\n        </div>\n\n        <ion-card-content>\n\n          <p class="text-black">{{"today" | translate}} 8:21 am <span float-right>$85 <span class="text-light">-</span> $95 </span>\n\n          </p>\n\n          <p class="text-light">Suzuki Swift Dezire<span float-right>{{"cash" | translate}} <span class="text-black">{{"paid" | translate}}</span></span>\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-card>\n\n        <div class="img-box">\n\n            <img src="assets/imgs/map.png" />\n\n        </div>\n\n        <ion-card-content>\n\n          <p class="text-black">{{"today" | translate}} 8:21 am <span float-right>$85 <span class="text-light">-</span> $95 </span>\n\n          </p>\n\n          <p class="text-light">Suzuki Swift Dezire<span float-right>{{"cash" | translate}} <span class="text-black">{{"paid" | translate}}</span></span>\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\mytrips\mytrips.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MytripsPage);
    return MytripsPage;
}());

//# sourceMappingURL=mytrips.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReferPage = /** @class */ (function () {
    function ReferPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-refer',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\refer\refer.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <img src="assets/imgs/menu-bg.png">\n\n  <div padding-left padding-right>\n\n    <ion-card class="bg-green shadow-green">\n\n      <ion-card-content text-center>\n\n        <p class="text-white">{{"ur_refer_code" | translate}}</p>\n\n        <h6 class="text-white">532461</h6>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <div padding-left padding-right padding-top>\n\n      <h4 class="text-green">{{"refer_earn" | translate}}</h4>\n\n      <p class="text-drack">{{"refer_earn_text" | translate}}</p>\n\n    </div>\n\n    <ion-row>\n\n      <ion-col col-3 text-center padding>\n\n        <img src="assets/imgs/fb.png">\n\n      </ion-col>\n\n      <ion-col col-3 text-center padding padding>\n\n        <img src="assets/imgs/wpp.png">\n\n      </ion-col>\n\n      <ion-col col-3 text-center padding>\n\n        <img src="assets/imgs/tw.png">\n\n      </ion-col>\n\n      <ion-col col-3 text-center padding>\n\n        <img src="assets/imgs/more.png">\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\refer\refer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ReferPage);
    return ReferPage;
}());

//# sourceMappingURL=refer.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_globalization__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_splash_splash__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_help_help__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_verification_verification__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_addcard_addcard__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_referralcode_referralcode__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_location_location__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_choosecab_choosecab__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_schedule_schedule__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_locading_locading__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_bookride_bookride__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_ridefullinfo_ridefullinfo__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_farerate_farerate__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_mytrips_mytrips__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_refer_refer__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_geolocation__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_android_permissions__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_referralcode_referralcode__["a" /* ReferralcodePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_choosecab_choosecab__["a" /* ChoosecabPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_locading_locading__["a" /* LocadingPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_bookride_bookride__["a" /* BookridePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_ridefullinfo_ridefullinfo__["a" /* RidefullinfoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_farerate_farerate__["a" /* FareratePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_mytrips_mytrips__["a" /* MytripsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_refer_refer__["a" /* ReferPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_addcard_addcard__["a" /* AddcardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_referralcode_referralcode__["a" /* ReferralcodePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_choosecab_choosecab__["a" /* ChoosecabPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_locading_locading__["a" /* LocadingPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_bookride_bookride__["a" /* BookridePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_ridefullinfo_ridefullinfo__["a" /* RidefullinfoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_farerate_farerate__["a" /* FareratePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_mytrips_mytrips__["a" /* MytripsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_refer_refer__["a" /* ReferPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_addcard_addcard__["a" /* AddcardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_globalization__["a" /* Globalization */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_7__app_config__["b" /* BaseAppConfig */] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_help_help__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_referralcode_referralcode__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mytrips_mytrips__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_refer_refer__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_config__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__node_modules_ngx_translate_core__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_globalization__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






//import { SplashPage } from '../pages/splash/splash';




//import { SignupPage } from '../pages/signup/signup';
//import { VerificationPage } from '../pages/verification/verification';
//import { AddcardPage } from '../pages/addcard/addcard';

//import { LocationPage } from '../pages/location/location';
//import { ChoosecabPage } from '../pages/choosecab/choosecab';
// import { SchedulePage } from '../pages/schedule/schedule';
//import { LocadingPage } from '../pages/locading/locading';
//import { BookridePage } from '../pages/bookride/bookride';
// import { RidefullinfoPage } from '../pages/ridefullinfo/ridefullinfo';
// import { FareratePage } from '../pages/farerate/farerate';





var MyApp = /** @class */ (function () {
    function MyApp(config, globalization, platform, statusBar, splashScreen, translate) {
        this.config = config;
        this.globalization = globalization;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            //{ title: 'Home', component: HomePage },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.translate.setDefaultLang('en');
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.platform.is('cordova')) {
                _this.globalization.getPreferredLanguage().then(function (result) {
                    console.log(result);
                    var suitableLang = _this.getSuitableLanguage(result.value);
                    console.log(suitableLang);
                    _this.translate.use(suitableLang);
                    _this.setDirectionAccordingly(suitableLang);
                }).catch(function (e) {
                    console.log(e);
                    _this.translate.use('en');
                    _this.platform.setDir('ltr', true);
                });
            }
            else {
                _this.translate.use('en');
                // this.setDirectionAccordingly('en');
                _this.setDirectionAccordingly('ar');
            }
        });
    };
    MyApp.prototype.setDirectionAccordingly = function (lang) {
        switch (lang) {
            case 'ar': {
                this.platform.setDir('ltr', false);
                this.platform.setDir('rtl', true);
                break;
            }
            default: {
                this.platform.setDir('rtl', false);
                this.platform.setDir('ltr', true);
                break;
            }
        }
    };
    MyApp.prototype.setDirection = function () {
        console.log('plat rtl: ' + this.platform.isRTL);
        if (this.platform.isRTL) {
            this.platform.setDir('rtl', true);
        }
        else {
            this.platform.setDir('ltr', true);
        }
    };
    MyApp.prototype.getSideOfCurLang = function () {
        return this.platform.dir() === 'rtl' ? "right" : "left";
    };
    MyApp.prototype.getSuitableLanguage = function (language) {
        language = language.substring(0, 2).toLowerCase();
        console.log('check for: ' + language);
        return this.config.availableLanguages.some(function (x) { return x.code == language; }) ? language : 'en';
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.homePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.mytripsPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_mytrips_mytrips__["a" /* MytripsPage */]);
    };
    MyApp.prototype.settingsPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */]);
    };
    MyApp.prototype.helpPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_help_help__["a" /* HelpPage */]);
    };
    MyApp.prototype.referPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_refer_refer__["a" /* ReferPage */]);
    };
    MyApp.prototype.loginPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.profilePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.referralcodePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_referralcode_referralcode__["a" /* ReferralcodePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\app\app.html"*/'<ion-menu [side]="getSideOfCurLang()" [content]="content">\n\n    <ion-header>\n\n        <div class="menu heading">\n\n            <ion-list>\n\n                <ion-item menuClose (click)="profilePage()">\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/profile_pix.png">\n\n                    </ion-avatar>\n\n                    <h2 class="text-white"><strong>Tarun Kumar</strong></h2>\n\n                    <p class="text-white">{{"view_info" | translate}}</p>\n\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n    </ion-header>\n\n\n\n    <ion-content class="menu" padding>\n\n        <ion-list>\n\n            <ion-item menuClose (click)="homePage()">\n\n                <ion-avatar item-start>\n\n                    <ion-icon name="md-navigate" class="text-green"></ion-icon>\n\n                </ion-avatar>\n\n                <h2>Home</h2>\n\n            </ion-item>\n\n        </ion-list>\n\n        <ion-list>\n\n            <ion-item menuClose (click)="mytripsPage()">\n\n                <ion-avatar item-start>\n\n                    <ion-icon name="md-car" class="text-green"></ion-icon>\n\n                </ion-avatar>\n\n                <h2>{{"my_trips1" | translate}}</h2>\n\n            </ion-item>\n\n        </ion-list>\n\n        <ion-list>\n\n            <ion-item menuClose (click)="settingsPage()">\n\n                <ion-avatar item-start>\n\n                    <ion-icon name="md-card" class="text-green"></ion-icon>\n\n                </ion-avatar>\n\n                <h2>{{"payment" | translate}}</h2>\n\n            </ion-item>\n\n        </ion-list>\n\n        <ion-list>\n\n            <ion-item menuClose (click)="helpPage()">\n\n                <ion-avatar item-start>\n\n                    <ion-icon name="md-alert" class="text-green"></ion-icon>\n\n                </ion-avatar>\n\n                <h2>{{"help" | translate}}</h2>\n\n            </ion-item>\n\n        </ion-list>\n\n        <ion-list>\n\n            <ion-item menuClose (click)="referPage()">\n\n                <ion-avatar item-start>\n\n                    <ion-icon name="md-share" class="text-green"></ion-icon>\n\n                </ion-avatar>\n\n                <h2>{{"refer_earn" | translate}}</h2>\n\n            </ion-item>\n\n        </ion-list>\n\n        <ion-list>\n\n            <ion-item menuClose (click)="loginPage()">\n\n                <ion-avatar item-start>\n\n                    <ion-icon name="md-power" class="text-green"></ion-icon>\n\n                </ion-avatar>\n\n                <h2>{{"logout" | translate}}</h2>\n\n            </ion-item>\n\n        </ion-list>\n\n        <!--\n\n    <ion-list>\n\n        <ion-item menuClose (click)="referralcodePage()">\n\n            <ion-avatar item-start>\n\n            </ion-avatar>\n\n            <h2>Referral Code</h2>\n\n        </ion-item>\n\n    </ion-list>\n\n    -->\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" [class]="deviceModel" type="overlay"></ion-nav>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\app\app.html"*/
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_13__app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_15__ionic_native_globalization__["a" /* Globalization */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_14__node_modules_ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SplashPage = /** @class */ (function () {
    function SplashPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\splash\splash.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Splash</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3>Ionic Menu Starter</h3>\n\n\n\n    <p>\n\n        If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n    </p>\n\n\n\n    <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\splash\splash.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocadingPage = /** @class */ (function () {
    function LocadingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LocadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-locading',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\locading\locading.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Locadinge</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3>Ionic Menu Starter</h3>\n\n\n\n    <p>\n\n        If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n    </p>\n\n\n\n    <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\locading\locading.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LocadingPage);
    return LocadingPage;
}());

//# sourceMappingURL=locading.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_location__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var latLng = new google.maps.LatLng(20.5937, 78.9629);
        this.loadMap(latLng);
        // this.locationPage();
        /*
        this.geolocation.getCurrentPosition().then((position) => {
            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            this.loadMap(latLng);
        }, (err) => {
            console.log(err);
        });
        */
    };
    HomePage.prototype.loadMap = function (latLng) {
        var mapOptions = {
            center: latLng,
            zoom: 4,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    HomePage.prototype.locationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__location_location__["a" /* LocationPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\home\home.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu" ></ion-icon>\n\n    </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div #map id="map" class="mymap"></div> \n\n    <ion-card class="search shadow-black">\n\n        <ion-card-content (click)="locationPage()">\n\n            <span class="dot"></span>\n\n            <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'whr2_go\' | translate}}"></ion-searchbar>\n\n            <ion-icon name="md-locate" class="text-black"></ion-icon>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Customer\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map