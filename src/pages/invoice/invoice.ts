import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController} from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';




@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage implements OnInit{

  orderList:any; 
  dataUser:any; 
  orderItemList:any;
  public api:ServiceProvider

  constructor(
    public navCtrl: NavController,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController
    ) {}


  ngOnInit() {     
      this.GetOrder(sessionStorage.getItem("orderId")); 
      this.GetOrderList(sessionStorage.getItem("orderId"));
      this.GetProfile();        
  }

async GetOrder(orderId:any){
  this.authService.getOrderSummary(orderId)
  .subscribe(res=>{
    this.orderList=res;
  });
}

async GetProfile(){ 
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });  
  loading.present();   
  this.authService.getProfile(sessionStorage.getItem("userId"))
  .subscribe(res=>{
    this.dataUser=res;
    loading.dismiss();  
  }); 
}

async GetOrderList(orderId:any){
  this.authService.getOrderSummaryList(orderId)
  .subscribe(res=>{
    this.orderItemList=res;
  }); 
}

  
DownloadInvoie(){
   
}
}
