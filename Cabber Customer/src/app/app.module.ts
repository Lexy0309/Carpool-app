import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Globalization } from '@ionic-native/globalization';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { APP_CONFIG, BaseAppConfig } from "./app.config";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SplashPage } from '../pages/splash/splash';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';
import { ProfilePage } from '../pages/profile/profile';
import { SignupPage } from '../pages/signup/signup';
import { VerificationPage } from '../pages/verification/verification';
import { AddcardPage } from '../pages/addcard/addcard';
import { ReferralcodePage } from '../pages/referralcode/referralcode';
import { LocationPage } from '../pages/location/location';
import { ChoosecabPage } from '../pages/choosecab/choosecab';
import { SchedulePage } from '../pages/schedule/schedule';
import { LocadingPage } from '../pages/locading/locading';
import { BookridePage } from '../pages/bookride/bookride';
import { RidefullinfoPage } from '../pages/ridefullinfo/ridefullinfo';
import { FareratePage } from '../pages/farerate/farerate';
import { MytripsPage } from '../pages/mytrips/mytrips';
import { ReferPage } from '../pages/refer/refer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { AndroidPermissions } from '@ionic-native/android-permissions';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SplashPage,
    LoginPage,
    SettingsPage,
    HelpPage,
    ProfilePage,
    SignupPage,
    VerificationPage,
    ReferralcodePage,
    LocationPage,
    ChoosecabPage,
    SchedulePage,
   LocadingPage,
   BookridePage,
   RidefullinfoPage,
   FareratePage,
   MytripsPage,
   ReferPage,
   AddcardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SplashPage,
    LoginPage,
    SettingsPage,
    HelpPage,
    ProfilePage,
    SignupPage,
    VerificationPage,
    ReferralcodePage,
    LocationPage,
    ChoosecabPage,
    SchedulePage,
    LocadingPage,
    BookridePage,
    RidefullinfoPage,
    FareratePage,
    MytripsPage,
    ReferPage,
    AddcardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	  Geolocation,
	  AndroidPermissions,Globalization,
    { provide: APP_CONFIG, useValue: BaseAppConfig },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}