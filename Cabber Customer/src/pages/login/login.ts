import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) {
  }
  
  homePage(){
    this.navCtrl.push(HomePage);
    }
    signupPage(){
    this.navCtrl.push(SignupPage);
    }

} 