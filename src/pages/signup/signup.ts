import { Component,OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { SigninPage } from '../signin/signin';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage implements OnInit{
  dataCity:any;
  dataArea:any;

  public postData={
    profileId:'0',
    name:'',
    emailId:'',
    mobile:'',
    address:'',
    state:'',
    city:'',
    pincode:'',
    companyLogo:'',
    password:'',
    shopUserId:'0',
    areaId:''
  }


    constructor(
    public navCtrl: NavController,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController,
    private storage: Storage
    ) {}
    public api:ServiceProvider

    ngOnInit() {   
        this.BindCity();
    }

    validateInput(){
      let name=this.postData.name.trim();
      let emailId=this.postData.emailId.trim();
      let mobile=this.postData.mobile.trim();
      let password=this.postData.password.trim();
      let areaId=this.postData.areaId.trim();
      return(this.postData.name && this.postData.emailId && this.postData.mobile && this.postData.password
         && name.length>0 && emailId.length>0 && mobile.length>0 && password.length>0 && areaId.length>0)
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

  async callShop(areaId){

  }

  otp(){
        

        if(this.validateInput()){
          let loading = this.loadingCtrl.create({
            content: 'Please wait...'
          });  
        loading.present();  
        this.authService.signUp(this.postData).subscribe((res:any)=>{
        if(res!="0"){
          this.storage.set('username', this.postData.mobile);
          this.storage.get('username').then((val) => {
            console.log('username :', val);
          });
          this.storage.set('password', this.postData.password);
          alert("Successfully Register!");
          this.navCtrl.push(SigninPage);
          loading.dismiss();  
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


 
}
