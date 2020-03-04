import { Component,Inject } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
//import { AboutPage } from '../pages/about/about';
//import { HomePage } from '../pages/home/home';
// import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
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

import { APP_CONFIG, AppConfig } from './app.config';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = LoginPage;

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private globalization: Globalization,
    public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen,public translate:TranslateService) {
    this.initializeApp();
  }

  initializeApp() {
    this.translate.setDefaultLang('en');
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (this.platform.is('cordova')) {
        this.globalization.getPreferredLanguage().then(result => {
          console.log(result);
          let suitableLang = this.getSuitableLanguage(result.value);
          console.log(suitableLang);
          this.translate.use(suitableLang);
          this.setDirectionAccordingly(suitableLang);
        }).catch(e => {
          console.log(e);
          this.translate.use('en');
          this.platform.setDir('ltr', true);
        });
      } else {
        this.translate.use('en');
        // this.setDirectionAccordingly('en');
        this.setDirectionAccordingly('ar');
      }
    });
  }

  setDirectionAccordingly(lang: string) {
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
  }

  setDirection() {
    console.log('plat rtl: ' + this.platform.isRTL);
    if (this.platform.isRTL) {
      this.platform.setDir('rtl', true);
    } else {
      this.platform.setDir('ltr', true);
    }
  }

  getSideOfCurLang() {
    return this.platform.dir() === 'rtl' ? "right" : "left";
  }

  getSuitableLanguage(language) {
    language = language.substring(0, 2).toLowerCase();
    console.log('check for: ' + language);
    return this.config.availableLanguages.some(x => x.code == language) ? language : 'en';
  }

}