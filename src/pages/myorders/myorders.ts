import { Component,OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { OrderslipPage } from '../orderslip/orderslip';


@Component({
  selector: 'page-myorders',
  templateUrl: 'myorders.html'
})


export class MyordersPage implements OnInit {  
  orderList:any;  
  public postData={
    id:sessionStorage.getItem("userId")
  }
  public api:ServiceProvider

 
  constructor(
    public navCtrl: NavController,
    //private serProvider:ServiceProvider,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController
    ) {}
  
  ngOnInit() {   
      console.log(sessionStorage.getItem("userId"));
      
      this.authService.getProfile(sessionStorage.getItem("userId"))
      .subscribe((res1:any)=>{
        this.getOrderList(sessionStorage.getItem("userId"));
      });
  }

   


  async getOrderList(userId:any){
    this.authService.getOrderList(userId)
    .subscribe(res=>{
      this.orderList=res;
    });
  }


  GetOrderSummary(orderId){
    sessionStorage.setItem("orderId",orderId);  
    console.log(orderId); 
    this.navCtrl.push(OrderslipPage)
  }

}
