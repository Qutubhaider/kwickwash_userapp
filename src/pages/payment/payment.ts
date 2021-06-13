import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OrderslipPage } from '../orderslip/orderslip';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {
payment: string = "debit";

  constructor(public navCtrl: NavController) {

  }
  
  orderslip(){
   this.navCtrl.push(OrderslipPage);
  }

}
