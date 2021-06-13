import { Component,OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-orderconfirmed',
  templateUrl: 'orderconfirmed.html'
})
export class OrderconfirmedPage implements OnInit{
  dataCity:any;
  dataArea:any;
  dataService:any;

  public postData={
    cityId:'',
    cityName:'',
    areaId:'',
    areaName:'',
    Location:'',
    srId:sessionStorage.getItem("srId"),
    serviceName:sessionStorage.getItem("srName"),
    customerName:sessionStorage.getItem("name"),
    mobile:sessionStorage.getItem("mobile"),
    shopId:sessionStorage.getItem("shopUserId"),
    lat:'0',
    longs:'0',
    userId:sessionStorage.getItem("userId")
  }

    constructor(
    public navCtrl: NavController,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController
    ) {}
    public api:ServiceProvider

    ngOnInit() {   
        console.log(sessionStorage.getItem("shopUserId"))
        this.BindCity();
      
        //this.getDataService();
    }
  

    userdetails = [
      {     
        customerName:""+sessionStorage.getItem("name")+"",
        mobile:""+sessionStorage.getItem("mobile")+"",
        srId:""+sessionStorage.getItem("srId")+"",
        serviceName:""+sessionStorage.getItem("srName")+""
      }      
    ];

    async getDataService(){
      //Start Loader Active
  
      console.log('welcome');
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });  
      loading.present();  
  
      //End Loader
      
      this.authService.getService()
      .subscribe(res=>{
        console.log(res);
        this.dataService=res;
        loading.dismiss();  
      });    
    }

    async BindCity(){
      console.log('Get City');
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });  
      loading.present();  
  
      //End Loader
      
      this.authService.getCity()
      .subscribe(res=>{
        console.log(res);
        this.dataCity=res;
        loading.dismiss();  
      });  
    }
    
    async callArea(cityId){   
      console.log('Get Area');
      console.log(cityId);   
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });  
      loading.present();  
  
      //End Loader
      
      this.authService.getArea(cityId)
      .subscribe(res=>{
        console.log(res);
        this.dataArea=res;
        loading.dismiss();  
      });  
    }
    async alertMess(mess:string){
      const prompt=await this.alertCtrl.create({      
        message:mess,
        buttons: [  
          {  
            text: 'OK',  
            handler: data => {  
              console.log('Ok');  
            }  
          }  
        ]
      })
      await prompt.present();
    }
  
    async showLoading() {  
      const loading = await this.loadingCtrl.create({      
      duration: 5000,  
      showBackdrop: false,  
      spinner: 'lines'  
      });  
      loading.present();  
    }
  
    async showLoader() {
      const loading = await this.loadingCtrl.create({     
        showBackdrop: false,  
        spinner: 'lines'  
      });
      loading.present();
    }
  
    validateInput(){
      let cityId=this.postData.cityId.trim();
      let areaId=this.postData.areaId.trim();
      let Location=this.postData.Location.trim();
      let srId=this.postData.srId.trim();
      
      return(this.postData.cityId && this.postData.areaId && this.postData.Location && 
        this.postData.srId && this.postData.customerName && this.postData.mobile &&
         cityId.length>0 && areaId.length>0 && Location.length>0 && srId.length>0 )
    }


    bookNow(){
      if(this.validateInput()){
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });  
      loading.present();  
      this.authService.kwickBook(this.postData).subscribe((res:any)=>{
      if(res!="0"){
        
        loading.dismiss();  
        alert("Successfully book your order request!");
        this.navCtrl.setRoot(TabsPage);
          }else{
            loading.dismiss();               
          }
        },
        (error:any)=>{
          console.log('Network connection error.',error);
        }
        )      
      }
    }


}
