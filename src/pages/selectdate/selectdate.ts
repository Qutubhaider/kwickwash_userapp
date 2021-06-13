import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-selectdate',
  templateUrl: 'selectdate.html'
})
export class SelectdatePage {
 dnt: string = "pick";

  constructor(public navCtrl: NavController) {

  }
  
  payment(){
    this.navCtrl.push(PaymentPage)
  }

}
