import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SelectdatePage } from '../selectdate/selectdate';

@Component({
  selector: 'page-selectaddress',
  templateUrl: 'selectaddress.html'
})
export class SelectaddressPage {

address: string = "home";

  constructor(public navCtrl: NavController) {

  }
  
   selectdate(){
    this.navCtrl.push(SelectdatePage)
  }
}
