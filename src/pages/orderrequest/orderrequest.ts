import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-orderrequest',
  templateUrl: 'orderrequest.html',
})

export class OrderrequestPage implements OnInit {  
  orderList:any;   
  public api:ServiceProvider
 
  constructor(
    public navCtrl: NavController,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController
    ) {}
  
  ngOnInit() {   
      console.log(sessionStorage.getItem("userId"));     
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });  
      loading.present();   
      this.authService.getProfile(sessionStorage.getItem("userId"))
      .subscribe((res1:any)=>{
        this.getOrderRequert(sessionStorage.getItem("userId"));
        loading.dismiss(); 
      });
  }

  async getOrderRequert(userId:any){
    this.authService.getOrderRequestList(userId)
    .subscribe(res=>{
      this.orderList=res;
    });
  }

}
