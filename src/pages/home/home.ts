import { Component,OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { OrderconfirmedPage } from '../orderconfirmed/orderconfirmed';
import { OrderslipPage } from '../orderslip/orderslip';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  dataService:any;
  orderList:any;
  id:any;
  public postData={
    id:sessionStorage.getItem("userId")
  }
  public api:ServiceProvider

  slides = [
    {     
      title: "",
      imgurl:"assets/imgs/slider-11.jpg",
    },
    {
      title: "",
      imgurl:"assets/imgs/slider-12.jpg",
    },
    {
      title: "",
      imgurl:"assets/imgs/slider-3.jpg",
    }
  ];

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
        console.log('Shop Id:'+res1[0]["shopUserId"]);
        sessionStorage.setItem("shopUserId",res1[0]["shopUserId"]);  
        sessionStorage.setItem("name",res1[0]["name"]);  
        sessionStorage.setItem("emailId",res1[0]["emailId"]);  
        sessionStorage.setItem("mobile",res1[0]["mobile"]);  
        sessionStorage.setItem("address",res1[0]["address"]);  
        sessionStorage.setItem("city",res1[0]["city"]);
        sessionStorage.setItem("piccode",res1[0]["piccode"]);
        this.getDataService();
        this.getOrderList(sessionStorage.getItem("userId"));
      });
    
  }

   

  async getDataService(){
    console.log('welcome');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });  
    loading.present();  
    this.authService.getService()
    .subscribe(res=>{
      console.log(res);
      this.dataService=res;
      loading.dismiss();  
    });    
  }

  async getOrderList(userId:any){
    this.authService.getOrderList(userId)
    .subscribe(res=>{
      this.orderList=res;
    });
  }

  selectproduct(sid,serviceName){
    sessionStorage.setItem("srId",sid);  
    sessionStorage.setItem("srName",serviceName);
    console.log(sid); 
    //this.navCtrl.push(SelectclothesPage)
    this.navCtrl.push(OrderconfirmedPage);
  }


  bookPage() {
    this.navCtrl.push(OrderconfirmedPage);
  }

  GetOrderSummary(orderId){
    sessionStorage.setItem("orderId",orderId);  
    console.log(orderId); 
    this.navCtrl.push(OrderslipPage)
  }
}
