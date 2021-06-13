import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';

import { OrderconfirmedPage } from '../orderconfirmed/orderconfirmed';
import { ServiceProvider } from '../../providers/service/service';
@Component({
  selector: 'page-selectclothes',
  templateUrl: 'selectclothes.html'
})
export class SelectclothesPage implements OnInit {
  dataProduct:any;
  public postData={
    //id:sessionStorage.getItem("userId")
  }
 
  public api:ServiceProvider
 
  constructor(
    public navCtrl: NavController,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController
    ) {

  }
  
  ngOnInit() {
    this.getProduct();
   }

   serviceName = [
    {     
      name:sessionStorage.getItem("srName"),
    }
  ];

  async getProduct(){
    
    //Start Loader Active
    console.log('welcome');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });  
    loading.present();  
    //End Loader
    
    this.authService.getProduct(sessionStorage.getItem("srId"))
    .subscribe(res=>{
      console.log(res);
      this.dataProduct=res;
      loading.dismiss();  
    });    
  }

  orderconfirmed(){   
    this.navCtrl.push(OrderconfirmedPage)
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.getProduct();
     // set val to the value of the ev target
     var val = ev.target.value;

     // if the value is an empty string don't filter the items
     if (val && val.trim() != '') {
       this.dataProduct = this.dataProduct.filter((item) => {
         return (this.dataProduct.toLowerCase().indexOf(val.toLowerCase()) > -1);
       })
     }
  }  
}
  