import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  splash = true;
  secondPage = WelcomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 7000);
  }

  goLogin(){
    this.navCtrl.push(SigninPage);
  }

  goReg(){
    this.navCtrl.push(SignupPage);
  }

}
