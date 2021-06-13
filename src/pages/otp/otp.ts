import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html'
})
export class OtpPage {

  constructor(public navCtrl: NavController) {

  }
  
   signin(){
        this.navCtrl.setRoot(SigninPage)
  }

}
