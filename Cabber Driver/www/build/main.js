webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cancelride_cancelride__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AcceptPage = /** @class */ (function () {
    function AcceptPage(navCtrl, modalCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
    }
    AcceptPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(20.5937, 78.9629);
        this.loadMap(latLng);
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.loadMap(latLng);
        }, function (err) {
            console.log(err);
        });
    };
    AcceptPage.prototype.loadMap = function (latLng) {
        var mapOptions = {
            center: latLng,
            zoom: 12,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    AcceptPage.prototype.acceptriderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__location_location__["a" /* LocationPage */]);
    };
    AcceptPage.prototype.showInfo = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cancelride_cancelride__["a" /* CancelridePage */]);
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AcceptPage.prototype, "mapElement", void 0);
    AcceptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accept',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\accept\accept.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      <small float-left text-left style="margin-right: auto;">{{"overview" | translate}}</small>\n\n      <span style="margin: auto;" (click)="showInfo()">TARUN KUMAR</span>\n\n      <small float-right text-rignt style="margin-left: auto;" (click)="showInfo()">{{"info" | translate}}</small>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<div #map id="map" class="mymap"></div>\n\n  <ion-card>\n\n    <ion-card-content class="text-light">\n\n      <div class="rider-info heading">\n\n        <ion-row>\n\n          <ion-col col-9>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-avatar item-start>\n\n                  <img src="assets/imgs/profile_pix.png">\n\n                </ion-avatar>\n\n                <small class="text-light">{{"drive2" | translate}}</small>\n\n                <h2 class="text-black">\n\n                  99 Fore St, Kingsbridge TQ71AB, UK\n\n                </h2>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col text-center col-3>\n\n            <ion-icon name="navigate" ios="md-navigate" class="text-green"></ion-icon>\n\n            <br>\n\n            <small>{{"navigate" | translate}}</small>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <div text-center padding-left padding-right class="btn-fix">\n\n    <div padding-left padding-right>\n\n      <button ion-button full class="bg-green full shadow-green btn" (click)="acceptriderPage()">{{"arrived" | translate}}</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\accept\accept.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], AcceptPage);
    return AcceptPage;
}());

//# sourceMappingURL=accept.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(203);
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
    LoginPage.prototype.tabsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{"sign_in" | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <img src="assets/imgs/logo.png" class="logo">\n\n  <div padding>\n\n    <ion-list class="form">\n\n      <ion-item class="bg-light">\n\n        <ion-label>{{"username" | translate}}</ion-label>\n\n        <ion-input type="text" value="+91 9876543210" text-end></ion-input>\n\n      </ion-item>\n\n      <ion-item class="bg-light">\n\n        <ion-label>{{"password" | translate}}</ion-label>\n\n        <ion-input type="password" value="*******" text-end></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full class="bg-green text-white btn round shadow-green" (click)="tabsPage()" text-uppercase>{{"login" | translate}}</button>\n\n  </div>\n\n\n\n  <ion-row padding-start padding-end>\n\n    <ion-col (click)="signupPage()">\n\n      <small>{{"new_user" | translate}} <strong class="text-green">{{"sign_up" | translate}}</strong></small>\n\n    </ion-col>\n\n    <ion-col text-end>\n\n      <small>{{"forgot" | translate}} <strong class="text-green">{{"password" | translate}}?</strong></small>\n\n    </ion-col>\n\n  </ion-row>\n\n  <p padding text-center class="option-login"><span>{{"or_continue_with" | translate}}</span></p>\n\n  <ion-row padding-left padding-right>\n\n    <ion-col>\n\n      <button ion-button full icon-start class="bg-blue text-white btn round shadow-blue">\n\n        <ion-icon name="logo-facebook"></ion-icon>\n\n        {{"facebook" | translate}}\n\n      </button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button full icon-start class="bg-white text-dark btn round shadow-black">\n\n        <ion-icon name="logo-googleplus"></ion-icon>\n\n        {{"google" | translate}}\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__earnings_earnings__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ratings_ratings__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__ratings_ratings__["a" /* RatingsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__earnings_earnings__["a" /* EarningsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\tabs\tabs.html"*/'<!-- <ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="{{\'home\' | translate}}" tabIcon="md-car"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="{{\'rating\' | translate}}" tabIcon="md-star"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="{{\'earning\' | translate}}" tabIcon="md-cash"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="{{\'profile\' | translate}}" tabIcon="md-person"></ion-tab>\n\n</ion-tabs> -->\n\n<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="md-car"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Rating" tabIcon="md-star"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Earning" tabIcon="md-cash"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="md-person"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EarningsPage; });
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


var EarningsPage = /** @class */ (function () {
    function EarningsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EarningsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-earnings',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\earnings\earnings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label text-center>{{"offline" | translate}}</ion-label>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-toggle checked="true"></ion-toggle>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-label text-center class="text-white">{{"online" | translate}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n  <img src="assets/imgs/Earnings.jpg">\n\n  <ion-card class="summery">\n\n    <ion-card-header>\n\n        {{"earning_summery" | translate}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col>\n\n          <label>{{"earning_week" | translate}}</label>\n\n          <ion-icon name="md-cash" item-start class="text-green"></ion-icon>\n\n          <h2 class="text-green">$ 500.45</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <label>{{"avg_earnings" | translate}}</label>\n\n          <ion-icon name="md-cash" item-start class="text-green"></ion-icon>\n\n          <h2 class="text-green">$ 140.20</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\earnings\earnings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], EarningsPage);
    return EarningsPage;
}());

//# sourceMappingURL=earnings.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsPage; });
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


var RatingsPage = /** @class */ (function () {
    function RatingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RatingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ratings',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\ratings\ratings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label text-center>{{"offline" | translate}}</ion-label>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-toggle checked="true"></ion-toggle>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-label text-center class="text-white">{{"online" | translate}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n  <div class="bg-green-dark" padding>\n\n    <p text-center class="text-white title-head">{{"ur_rating" | translate}}</p>\n\n    <h1 text-center class="text-white">\n\n      <ion-icon name="md-star"></ion-icon>4.6\n\n    </h1>\n\n    <div class="rating-box">\n\n      <p><span class="text-1">5<ion-icon name="md-star"></ion-icon></span><span class="rate-bar r100"></span><span class="text-2">100</span></p>\n\n      <p><span class="text-1">4<ion-icon name="md-star"></ion-icon></span><span class="rate-bar r90"></span><span class="text-2">90</span></p>\n\n      <p><span class="text-1">3<ion-icon name="md-star"></ion-icon></span><span class="rate-bar r60"></span><span class="text-2">60</span></p>\n\n      <p><span class="text-1">2<ion-icon name="md-star"></ion-icon></span><span class="rate-bar r40"></span><span class="text-2">40</span></p>\n\n      <p><span class="text-1">1<ion-icon name="md-star"></ion-icon></span><span class="rate-bar r20"></span><span class="text-2">20</span></p>\n\n    </div>\n\n  </div>\n\n  <ion-card class="summery">\n\n    <ion-card-header>\n\n      {{"trip_summary" | translate}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col>\n\n          <label>{{"total_trips" | translate}}</label>\n\n          <ion-icon name="md-car" item-start class="text-green"></ion-icon>\n\n          <h2 class="text-green">870</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <label>{{"total_trips1" | translate}}</label>\n\n          <ion-icon name="md-car" item-start class="text-green"></ion-icon>\n\n          <h2 class="text-green">700</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\ratings\ratings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RatingsPage);
    return RatingsPage;
}());

//# sourceMappingURL=ratings.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accept_accept__ = __webpack_require__(104);
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
        this.checked = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var latLng = new google.maps.LatLng(20.5937, 78.9629);
        this.loadMap(latLng);
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
    HomePage.prototype.acceptPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__accept_accept__["a" /* AcceptPage */]);
    };
    HomePage.prototype.onlineOfflineToggle = function () {
        console.log('checked ' + this.checked);
    };
    HomePage.prototype.declinePage = function () {
        //this.navCtrl.push(AcceptPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label text-center class="text-white">{{"offline" | translate}}</ion-label>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-toggle [(ngModel)]="checked" (ionChange)="onlineOfflineToggle()" checked="false"></ion-toggle>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-label text-center>{{"online" | translate}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<div #map id="map" class="mymap"></div>\n\n    <!-- <p (click)="locationPage()" class="btn bg-green text-white" text-center padding>Accept rider</p> -->\n\n	\n\n	<div *ngIf="checked" class="summery">\n\n    <ion-card class="text-black">\n\n      <ion-card-header>\n\n        <small float-left class="text-light">{{"cust_info" | translate}}</small>\n\n        <small float-right class="text-green" (click)="declinePage()">{{"decline" | translate}}</small>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <div class="passanger-info heading">\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-avatar item-start>\n\n                <img src="assets/imgs/profile_pix.png">\n\n              </ion-avatar>\n\n              <h2 class="text-black">\n\n                  Tarun Kumar\n\n              </h2>\n\n              <p class="text-black">4.7\n\n                <span class="rateing">\n\n                <ion-icon name="star" class="text-green"></ion-icon>\n\n                <ion-icon name="star" class="text-green"></ion-icon>\n\n                <ion-icon name="star" class="text-green"></ion-icon>\n\n                <ion-icon name="star" class="text-green"></ion-icon>\n\n                <ion-icon name="star" class="text-green"></ion-icon>\n\n                  </span>\n\n              </p>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n        <ion-row padding class="car-details">\n\n          <ion-col>\n\n            <small class="text-light">{{"pick4m" | translate}}</small>\n\n            <strong class="text-black">{{"submit_venue" | translate}}</strong>\n\n          </ion-col>\n\n          <ion-col>\n\n            <small class="text-light">{{"how_far" | translate}}</small>\n\n            <strong class="text-black">0.5 km away</strong>\n\n          </ion-col>\n\n        </ion-row>\n\n        <div text-center padding-left padding-right>\n\n          <button ion-button full class="bg-green full" (click)="acceptPage()"> {{"accept" | translate}} <span class="time"> (02:29 {{"min" | translate}})</span></button>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n	\n\n  <ion-card *ngIf="!checked" class="summery">\n\n    <ion-card-header>\n\n      {{"2days_info" | translate}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col>\n\n          <label>{{"trips2day" | translate}}</label>\n\n          <ion-icon name="md-car" item-start class="text-green"></ion-icon>\n\n          <h2 class="text-green">9 {{"trips" | translate}}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <label>{{"2days_earning" | translate}}</label>\n\n          <ion-icon name="md-cash" item-start class="text-green"></ion-icon>\n\n          <h2 class="text-green">140.20 $</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <label>{{"online_2day" | translate}}</label>\n\n          <ion-icon name="md-time" item-start class="text-green"></ion-icon>\n\n          <h2 class="text-green">5 {{"hours" | translate}}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <label>{{"2days_avg_rating" | translate}}</label>\n\n          <ion-icon name="md-star" item-start class="text-green"></ion-icon>\n\n          <h2 class="text-green">5 {{"hours" | translate}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__acceptrider_acceptrider__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(42);
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
    function LocationPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(20.5937, 78.9629);
        this.loadMap(latLng);
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
            zoom: 12,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    LocationPage.prototype.requestPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__acceptrider_acceptrider__["a" /* AcceptriderPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */])
    ], LocationPage.prototype, "mapElement", void 0);
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\location\location.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            TARUN KUMAR\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-left padding-right>\n\n	<div #map id="map" class="mymap"></div>\n\n    <ion-card class="">\n\n        <ion-card-content>\n\n            <ion-row class="">\n\n                <ion-col col-2>\n\n                    <div class="">\n\n                        <div class="active-stage">\n\n                            <span class="col-1"><strong class="bg-green"></strong></span>\n\n                            <span class="col-2"></span>\n\n                            <span class="col-3"><strong class="bg-yellow"></strong></span>\n\n\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                    <ion-list class="form">\n\n                        <ion-item class="bg-white border-bottom">\n\n                            <ion-label text-right>From</ion-label>\n\n                            <ion-input type="text" class="" value="Your Location"></ion-input>\n\n                            <ion-icon name="md-locate" class="text-black"></ion-icon>\n\n                        </ion-item>\n\n                        <ion-item class="bg-white border-none">\n\n                            <ion-label text-right>To</ion-label>\n\n                            <ion-input type="text" value="Sid Ave, Journal Squrnal, NJ"></ion-input>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <div text-center padding-left padding-right class="btn-fix">\n\n        <div padding-left padding-right>\n\n            <button ion-button full class="bg-green full btn shadow-green" (click)="requestPage()">DOUBLE TAP TO BEGIN TRIP</button>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\location\location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptriderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fare_fare__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AcceptriderPage = /** @class */ (function () {
    function AcceptriderPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    AcceptriderPage.prototype.farePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__fare_fare__["a" /* FarePage */]);
    };
    AcceptriderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(20.5937, 78.9629);
        this.loadMap(latLng);
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.loadMap(latLng);
        }, function (err) {
            console.log(err);
        });
    };
    AcceptriderPage.prototype.loadMap = function (latLng) {
        var mapOptions = {
            center: latLng,
            zoom: 12,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */])
    ], AcceptriderPage.prototype, "mapElement", void 0);
    AcceptriderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-acceptrider',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\acceptrider\acceptrider.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      TARUN KUMAR\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<div #map id="map" class="mymap"></div>\n\n  <ion-card>\n\n    <ion-card-content class="text-light">\n\n      <div class="rider-info heading">\n\n        <ion-row>\n\n          <ion-col col-9>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-avatar item-start>\n\n                  <img src="assets/imgs/profile_pix.png">\n\n                </ion-avatar>\n\n                <small class="text-light">Drive to</small>\n\n                <h2 class="text-black">\n\n                  99 Fore St, Kingsbridge TQ71AB, UK\n\n                </h2>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col text-center col-3>\n\n            <ion-icon name="navigate" ios="md-navigate" class="text-green"></ion-icon>\n\n            <br>\n\n            <small>NEVIGATE</small>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <div text-center padding-left padding-right class="btn-fix">\n\n    <div padding-left padding-right>\n\n      <button ion-button full class="bg-red btn full shadow-red" (click)="farePage()">{{"2tap2end" | translate}}</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\acceptrider\acceptrider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], AcceptriderPage);
    return AcceptriderPage;
}());

//# sourceMappingURL=acceptrider.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarePage; });
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


var FarePage = /** @class */ (function () {
    function FarePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FarePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fare',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\fare\fare.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title> {{"receipt" | translate}} </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg-light">\n\n  <div class="bg-white recipt" text-center>\n\n    <h6>{{"fare_summery" | translate}}</h6>\n\n    <div class="outline bg-green"></div>\n\n    <h1 class="text-black">$23.00</h1>\n\n    <p>22 Oct, 2017, 12:30</p>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/imgs/profile_pix.png">\n\n        </ion-avatar>\n\n        <p class="text-black">{{"rate_now" | translate}}</p>\n\n        <h2 class="text-black"><strong>TARUN KUMAR</strong></h2>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div class="rateing" padding margin text-center>\n\n    <ion-icon name="star" class=""></ion-icon>\n\n    <ion-icon name="star" class=""></ion-icon>\n\n    <ion-icon name="star" class=""></ion-icon>\n\n    <ion-icon name="star" class=""></ion-icon>\n\n    <ion-icon name="star" class=""></ion-icon>\n\n  </div>\n\n  <div padding-left padding-right margin>\n\n    <button ion-button full class="bg-red text-white btn round shadow-red">{{"submit_rating" | translate}}</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\fare\fare.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FarePage);
    return FarePage;
}());

//# sourceMappingURL=fare.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelridePage; });
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


var CancelridePage = /** @class */ (function () {
    function CancelridePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    CancelridePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CancelridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cancelride',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\cancelride\cancelride.html"*/'<ion-content padding>\n\n    <h1 text-right>\n\n        <ion-icon name="md-close" (click)="dismiss()"></ion-icon>\n\n    </h1>\n\n    <div class="modal" padding text-center>\n\n        <img src="assets/imgs/profile_pix.png">\n\n        <h1>Tarun Kumar</h1>\n\n        <h3 class="text-green">+19 987654362</h3>\n\n        <p class="text-dark"><span>4.7</span>\n\n            <ion-icon name="md-star" class="text-green"></ion-icon>\n\n            <ion-icon name="md-star" class="text-green"></ion-icon>\n\n            <ion-icon name="md-star" class="text-green"></ion-icon>\n\n            <ion-icon name="md-star" class="text-green"></ion-icon>\n\n            <ion-icon name="md-star" class="text-green"></ion-icon>\n\n        </p>\n\n    </div>\n\n    <div text-center padding-left padding-right class="btn-fix">\n\n        <div padding-left padding-right>\n\n            <button ion-button full class="bg-green full shadow-green btn">CANCEL TRIP</button>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\cancelride\cancelride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], CancelridePage);
    return CancelridePage;
}());

//# sourceMappingURL=cancelride.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documents_documents__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mytrips_mytrips__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__share_share__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__myprofile_myprofile__ = __webpack_require__(218);
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
    ProfilePage.prototype.aboutPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    ProfilePage.prototype.helpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__help_help__["a" /* HelpPage */]);
    };
    ProfilePage.prototype.documentsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__documents_documents__["a" /* DocumentsPage */]);
    };
    ProfilePage.prototype.settingsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
    };
    ProfilePage.prototype.mytripsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mytrips_mytrips__["a" /* MytripsPage */]);
    };
    ProfilePage.prototype.sharePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__share_share__["a" /* SharePage */]);
    };
    ProfilePage.prototype.myprofilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__myprofile_myprofile__["a" /* MyprofilePage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label text-center>{{"offline" |\n\n         translate}}</ion-label>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-toggle checked="true"></ion-toggle>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-label text-center class="text-white">{{"online" |\n\n         translate}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list padding>\n\n    <ion-item padding>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/profile_pix.png">\n\n      </ion-avatar>\n\n      <h2 class="text-dark">Ravinder Singh\n\n        <small class="text-green" float-end (click)="myprofilePage()">{{"view_info" | translate}}</small>\n\n      </h2>\n\n      <p class="text-dark"><span>4.7</span>\n\n        <ion-icon name="md-star" class="text-green"></ion-icon>\n\n        <ion-icon name="md-star" class="text-green"></ion-icon>\n\n        <ion-icon name="md-star" class="text-green"></ion-icon>\n\n        <ion-icon name="md-star" class="text-green"></ion-icon>\n\n        <ion-icon name="md-star" class="text-green"></ion-icon>\n\n      </p>\n\n    </ion-item>\n\n    <ion-item class="car-detail">\n\n      <ion-item>\n\n        <p class="text-">Hyundai WagonR\n\n          <span class="text-green" float-end>{{"change" | translate}}</span>\n\n        </p>\n\n        <h2 class="text-dark"><strong>DL ZA 5887</strong></h2>\n\n      </ion-item>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div padding class="bg-light menu-items">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <div class="bg-white" padding text-center (click)="helpPage()">\n\n          <ion-icon name="md-help-circle" class="text-green"></ion-icon>\n\n          <h4>{{"help" | translate}}</h4>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <div class="bg-white" padding text-center (click)="documentsPage()">\n\n          <ion-icon name="md-paper" class="text-green"></ion-icon>\n\n          <h4>{{"documents" | translate}}</h4>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <div class="bg-white" padding text-center (click)="settingsPage()">\n\n          <ion-icon name="md-settings" class="text-green"></ion-icon>\n\n          <h4>{{"settings" | translate}}</h4>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <div class="bg-white" padding text-center (click)="mytripsPage()">\n\n          <ion-icon name="md-car" class="text-green"></ion-icon>\n\n          <h4>{{"my_trips1" | translate}}</h4>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <div class="bg-white" padding text-center (click)="sharePage()">\n\n          <ion-icon name="md-share" class="text-green"></ion-icon>\n\n          <h4>{{"share" | translate}}</h4>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <div class="bg-white" padding text-center (click)="aboutPage()">\n\n          <ion-icon name="md-alert" class="text-green"></ion-icon>\n\n          <h4>{{"about" | translate}}</h4>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n        {{"about" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding text-center>\n\n  <div class="about">\n\n    <img src="assets/imgs/logo.png" class="logo">\n\n    <p class="text-light">{{"app_title" | translate}} 3.1 (0511)</p>\n\n  </div>\n\n  <p class="text-green bottom">{{"end_user_docs" | translate}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 213:
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
            selector: 'page-help',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\help\help.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-uppercase>\n\n      {{"help" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n  <br>\n\n  <ion-card padding>\n\n    <ion-card-content>\n\n        <h2>{{"support" | translate}}</h2>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <br>\n\n  <ion-card padding>\n\n    <ion-card-content>\n\n        <h2>{{"payment" | translate}}</h2>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card padding>\n\n    <ion-card-content>\n\n        <h2>{{"account" | translate}}</h2>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card padding>\n\n    <ion-card-content>\n\n        <h2>{{"device" | translate}}</h2>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card padding>\n\n    <ion-card-content>\n\n        <h2>{{"vehicle" | translate}}</h2>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsPage; });
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


var DocumentsPage = /** @class */ (function () {
    function DocumentsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DocumentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documents',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\documents\documents.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-uppercase>\n\n      {{"documents" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n  <p padding class="text-light"><span padding-left padding-right>{{"driver_documents" | translate}}</span></p>\n\n  <ion-card padding>\n\n    <ion-card-content>\n\n      <h2>{{"driver_license" | translate}}</h2>\n\n      <p>{{"expires" | translate}}: Feb 25, 2019</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <p padding class="text-light"><span padding-left padding-right>Hundai Wagonr {{"documents" | translate}}</span></p>\n\n  <ion-card padding>\n\n    <ion-card-content>\n\n      <h2>{{"vehicle_insurance" | translate}}</h2>\n\n      <p>{{"expires" | translate}}: Feb 25, 2019</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card padding>\n\n    <ion-card-content>\n\n      <h2>{{"vehicle_registration" | translate}}</h2>\n\n      <p>{{"expires" | translate}}: Feb 25, 2019</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\documents\documents.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], DocumentsPage);
    return DocumentsPage;
}());

//# sourceMappingURL=documents.js.map

/***/ }),

/***/ 215:
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
            selector: 'page-settings',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-uppercase>\n\n      {{"settings" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n  <p padding class="text-light"><span padding-left padding-right>{{"map" | translate}} {{"settings" | translate}}</span></p>\n\n  <ion-card padding>\n\n    <ion-card-content>\n\n      <h2>{{"navigation_provider" | translate}}</h2>\n\n      <p>{{"google_map" | translate}}</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card padding>\n\n    <ion-card-content>\n\n      <h2 class="d-flex">{{"show_traffic_map" | translate}}\n\n        <ion-checkbox color="secondary" checked="true"></ion-checkbox>\n\n      </h2>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <p padding class="text-light"><span padding-left padding-right>{{"other" | translate}}</span></p>\n\n  <ion-card padding>\n\n    <ion-card-content>\n\n      <h2 class="d-flex">{{"account_status" | translate}}\n\n        <ion-toggle checked="true" color="secondary"></ion-toggle>\n\n      </h2>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card padding>\n\n    <ion-card-content>\n\n      <h2>{{"contacts" | translate}}</h2>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 216:
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
    }
    MytripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mytrips',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\mytrips\mytrips.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{"my_trips" | translate}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg-light">\n\n  <ion-list>\n\n    <ion-card>\n\n      <div class="img-box">\n\n        <img src="assets/imgs/map.png" />\n\n      </div>\n\n      <ion-card-content>\n\n        <p class="text-black">{{"today" | translate}} 8:21 am <span float-end>$85 <span class="text-light">-</span> $95 </span>\n\n        </p>\n\n        <p class="text-light">Suzuki Swift Dezire<span float-end>{{"cash" | translate}} <span class="text-black">{{"paid" | translate}}</span></span>\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <div class="img-box">\n\n        <img src="assets/imgs/map.png" />\n\n      </div>\n\n      <ion-card-content>\n\n        <p class="text-black">{{"today" | translate}} 2:45 pm <span float-end>$65.00</span>\n\n        </p>\n\n        <p class="text-light">Hyundai xcent<span float-end>{{"credit" | translate}} <span class="text-black">{{"paid" | translate}}</span></span>\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <div class="img-box">\n\n        <img src="assets/imgs/map.png" />\n\n      </div>\n\n      <ion-card-content>\n\n        <p class="text-black">{{"today" | translate}} 2:45 pm <span float-end>$65.00</span>\n\n        </p>\n\n        <p class="text-light">Hyundai xcent<span float-end>{{"credit" | translate}} <span class="text-black">{{"paid" | translate}}</span></span>\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\mytrips\mytrips.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MytripsPage);
    return MytripsPage;
}());

//# sourceMappingURL=mytrips.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePage; });
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


var SharePage = /** @class */ (function () {
    function SharePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-share',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\share\share.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            {{"share" | translate}}\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <p padding class="text-light"><span padding-left padding-right>{{"share_with" | translate}}</span></p>\n\n    <ion-card padding>\n\n        <ion-card-content>\n\n            <h2>Facebook</h2>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card padding>\n\n        <ion-card-content>\n\n            <h2>Whatsapp</h2>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card padding>\n\n        <ion-card-content>\n\n            <h2>Twitter</h2>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card padding>\n\n        <ion-card-content>\n\n            <h2>Google+</h2>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\share\share.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SharePage);
    return SharePage;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
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


var MyprofilePage = /** @class */ (function () {
    function MyprofilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\myprofile\myprofile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="top-side">\n\n    <img src="assets/imgs/menu-bg.png">\n\n    <div class="icon-box">\n\n      <ion-icon name="md-create" class="bg-green text-white icon"></ion-icon>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="form" padding>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>{{"first_name" | translate}}</ion-label>\n\n        <ion-input type="text" value="Tarun" readonly></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"last_name" | translate}}</ion-label>\n\n        <ion-input type="text" value="Kumar" readonly></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"phone" | translate}}\n\n        </ion-label>\n\n        <ion-input type="text" value="+91 96431487" readonly></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"email" | translate}}</ion-label>\n\n        <ion-input type="text" value="cabberdriver@email.com" readonly></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{"password" | translate}}</ion-label>\n\n        <ion-input type="text" value="* * * * * *" readonly></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\myprofile\myprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 219:
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

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_request_request__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_acceptrider_acceptrider__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_accept_accept__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_roder_roder__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cancelride_cancelride__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_nevigate_nevigate__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_location_location__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_fare_fare__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ratings_ratings__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_earnings_earnings__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_help_help__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_documents_documents__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_mytrips_mytrips__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_share_share__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_myprofile_myprofile__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_android_permissions__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_globalization__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_common_http__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ngx_translate_core__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ngx_translate_http_loader__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__app_config__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_32__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_acceptrider_acceptrider__["a" /* AcceptriderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_roder_roder__["a" /* RoderPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cancelride_cancelride__["a" /* CancelridePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_nevigate_nevigate__["a" /* NevigatePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_fare_fare__["a" /* FarePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ratings_ratings__["a" /* RatingsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_earnings_earnings__["a" /* EarningsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mytrips_mytrips__["a" /* MytripsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_accept_accept__["a" /* AcceptPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    // mode:'ios',
                    platforms: {
                        ios: {
                            backButtonText: '',
                            iconMode: 'ios',
                            backButtonIcon: 'md-arrow-back'
                        }
                    }
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_30__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_31__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_31__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_30__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_acceptrider_acceptrider__["a" /* AcceptriderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_roder_roder__["a" /* RoderPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cancelride_cancelride__["a" /* CancelridePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_nevigate_nevigate__["a" /* NevigatePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_fare_fare__["a" /* FarePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ratings_ratings__["a" /* RatingsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_earnings_earnings__["a" /* EarningsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mytrips_mytrips__["a" /* MytripsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_accept_accept__["a" /* AcceptPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_29__ionic_native_globalization__["a" /* Globalization */],
                { provide: __WEBPACK_IMPORTED_MODULE_33__app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_33__app_config__["b" /* BaseAppConfig */] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ngx_translate_core__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_globalization__ = __webpack_require__(223);
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




//import { TabsPage } from '../pages/tabs/tabs';
//import { AboutPage } from '../pages/about/about';
//import { HomePage } from '../pages/home/home';
// import { TabsPage } from '../pages/tabs/tabs';

//import { OfflinePage } from '../pages/offline/offline';
//import { OnlinePage } from '../pages/online/online';
//import { RequestPage } from '../pages/request/request';
// import { AcceptriderPage } from '../pages/acceptrider/acceptrider';
//import { AcceptPage } from '../pages/accept/accept';
//import { RoderPage } from '../pages/roder/roder';
//import { CancelridePage } from '../pages/cancelride/cancelride';
//import { NevigatePage } from '../pages/nevigate/nevigate';
//import { LocationPage } from '../pages/location/location';
//import { FarePage } from '../pages/fare/fare';
// import { RatingsPage } from '../pages/ratings/ratings';
//import { EarningsPage } from '../pages/earnings/earnings';
// import { ProfilePage } from '../pages/profile/profile';
// import { HelpPage } from '../pages/help/help';
// import { DocumentsPage } from '../pages/documents/documents';
// import { SettingsPage } from '../pages/settings/settings';
// import { MytripsPage } from '../pages/mytrips/mytrips';
// import { SharePage } from '../pages/share/share';
//import { MyprofilePage } from '../pages/myprofile/myprofile';



var MyApp = /** @class */ (function () {
    function MyApp(config, globalization, platform, statusBar, splashScreen, translate) {
        this.config = config;
        this.globalization = globalization;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
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
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\app\app.html"*/
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_7__ionic_native_globalization__["a" /* Globalization */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__node_modules_ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accept_accept__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestPage = /** @class */ (function () {
    function RequestPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RequestPage.prototype.acceptPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__accept_accept__["a" /* AcceptPage */]);
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\request\request.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="bg-img">\n\n    <div class="card-box">\n\n        <ion-card class="text-black">\n\n            <ion-card-header>\n\n                <small float-left class="text-light">Passanger Info</small>\n\n                <small float-right class="text-green">Decline</small>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <div class="passanger-info heading">\n\n                    <ion-list>\n\n                        <ion-item>\n\n                            <ion-avatar item-start>\n\n                                <img src="assets/imgs/profile_pix.png">\n\n                            </ion-avatar>\n\n                            <h2 class="text-black">\n\n                                Tarun Kumar\n\n                            </h2>\n\n                            <p class="text-black">4.7\n\n                                <span class="rateing">\n\n                                <ion-icon name="star" class="text-green"></ion-icon>\n\n                                <ion-icon name="star" class="text-green"></ion-icon>\n\n                                <ion-icon name="star" class="text-green"></ion-icon>\n\n                                <ion-icon name="star" class="text-green"></ion-icon>\n\n                                <ion-icon name="star" class="text-green"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n                <ion-row padding class="car-details">\n\n                    <ion-col>\n\n                        <small class="text-light">Pick up From</small>\n\n                        <strong class="text-black">Summit Avenue</strong>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <small class="text-light">How far</small>\n\n                        <strong class="text-black">0.5km away</strong>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <div text-center padding-left padding-right>\n\n                    <button ion-button full class="bg-green full" (click)="acceptPage()"> ACCEPT <span class="time">(02:29 Min)</span></button>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\request\request.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoderPage; });
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


var RoderPage = /** @class */ (function () {
    function RoderPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RoderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roder',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\roder\roder.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Contact\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-list-header>Roder</ion-list-header>\n\n        <ion-item>\n\n            <ion-icon name="ionic" item-start></ion-icon>\n\n            @ionicframework\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\roder\roder.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RoderPage);
    return RoderPage;
}());

//# sourceMappingURL=roder.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NevigatePage; });
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


var NevigatePage = /** @class */ (function () {
    function NevigatePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NevigatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nevigate',template:/*ion-inline-start:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\nevigate\nevigate.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title text-center>\n\n            <small float-left text-left style="margin-right: auto;">Overview</small>\n\n            <span style="margin: auto;" (click)="showInfo()">TARUN KUMAR</span>\n\n            <small float-right text-rignt style="margin-left: auto;" (click)="showInfo()">Info</small>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-img">\n\n    <ion-card>\n\n        <ion-card-content class="text-light">\n\n            <ion-row>\n\n                <ion-col col-9>\n\n                    <ion-list padding-left>\n\n                        <ion-item>\n\n                            <h2 class="text-black">\n\n                                Staight to Manhattan Ave\n\n                            </h2>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </ion-col>\n\n                <ion-col text-center col-3>\n\n                    <ion-icon name="navigate" ios="md-navigate" class="text-green"></ion-icon>\n\n                    <br>\n\n                    <small class=text-green>420 ft</small>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <div text-center padding-left padding-right class="btn-fix">\n\n        <div padding-left padding-right>\n\n            <button ion-button full class="bg-green full shadow-green btn" (click)="acceptriderPage()">ARRIVED</button>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\01_lexy_work\Carpool app\Cabber Driver\src\pages\nevigate\nevigate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], NevigatePage);
    return NevigatePage;
}());

//# sourceMappingURL=nevigate.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.js.map