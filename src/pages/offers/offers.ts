import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html'
})
export class OffersPage implements OnInit{
  public api:ServiceProvider
  offerList:any;  
  constructor(
    public navCtrl: NavController,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController) {
  }

  ngOnInit() {   
    console.log(sessionStorage.getItem("userId"));     
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });  
    loading.present();   
    this.authService.getProfile(sessionStorage.getItem("userId"))
    .subscribe((res1:any)=>{
      this.getOffer(sessionStorage.getItem("shopUserId"));
      loading.dismiss(); 
    });
  }
  async getOffer(shopId:any){
    this.authService.getOfferList(shopId)
    .subscribe(res=>{
      this.offerList=res;
    });
  }
}
