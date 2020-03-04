import { Component, ViewChild,Inject } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
//import { SplashPage } from '../pages/splash/splash';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';
import { ProfilePage } from '../pages/profile/profile';
//import { SignupPage } from '../pages/signup/signup';
//import { VerificationPage } from '../pages/verification/verification';
//import { AddcardPage } from '../pages/addcard/addcard';
import { ReferralcodePage } from '../pages/referralcode/referralcode';
//import { LocationPage } from '../pages/location/location';
//import { ChoosecabPage } from '../pages/choosecab/choosecab';
// import { SchedulePage } from '../pages/schedule/schedule';
//import { LocadingPage } from '../pages/locading/locading';
//import { BookridePage } from '../pages/bookride/bookride';
// import { RidefullinfoPage } from '../pages/ridefullinfo/ridefullinfo';
// import { FareratePage } from '../pages/farerate/farerate';
import { MytripsPage } from '../pages/mytrips/mytrips';
import { ReferPage } from '../pages/refer/refer';
import { APP_CONFIG, AppConfig } from './app.config';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private globalization: Globalization,
  public platform: Platform, public statusBar: StatusBar, 
  public splashScreen: SplashScreen,public translate:TranslateService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

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

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  homePage() {
    this.nav.setRoot(HomePage);
  }

  mytripsPage() {
    this.nav.setRoot(MytripsPage);
  }

  settingsPage() {
    this.nav.setRoot(SettingsPage);
  }

  helpPage() {
    this.nav.setRoot(HelpPage);
  }

  referPage() {
    this.nav.setRoot(ReferPage);
  }

  loginPage() {
    this.nav.setRoot(LoginPage);
  }

  profilePage() {
    this.nav.setRoot(ProfilePage);
  }

  referralcodePage() {
    this.nav.setRoot(ReferralcodePage);
  }
}
