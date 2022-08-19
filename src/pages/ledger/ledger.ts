import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the LedgerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-ledger',
  templateUrl: 'ledger.html',
})
export class LedgerPage {
  ledgerList:any;
  id:any;
  public postData={
    id:sessionStorage.getItem("userId")
  }
  public api:ServiceProvider

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams, 
      private authService:ServiceProvider,
      public loadingCtrl:LoadingController,) {
  }

  ngOnInit() {   
    console.log(sessionStorage.getItem("userId"));
    
    this.authService.getProfile(sessionStorage.getItem("userId"))
    .subscribe((res1:any)=>{
      this.getCustomerLedger(sessionStorage.getItem("userId"));
    });
}

 

  async getCustomerLedger(userId:any){
    console.log('welcome');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });  
    loading.present();  
    this.authService.getLedger(userId)
    .subscribe(res=>{
      this.ledgerList=res;
      loading.dismiss();  
    });   
  }


}
