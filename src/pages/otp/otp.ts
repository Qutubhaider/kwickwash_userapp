import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html'
})
export class OtpPage {
  public postData={
    userid:'',
    otp:''
  }

  ngOnInit() {
    console.log(sessionStorage.getItem("userId"));
    this.postData.userid=sessionStorage.getItem("userId");
  }

  public api:ServiceProvider
  constructor(
    public navCtrl: NavController,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController
    ) {
    }
  
    validateInput(){
      let otp=this.postData.otp;  
      return(this.postData.otp && otp.length>0) 
  }

  loginUser(){   
    if(this.validateInput()){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });  
    loading.present();  
      this.authService.validateOTPLogin(this.postData).subscribe((res:any)=>{
        if(res!="0"){
          loading.dismiss();  
          sessionStorage.setItem("userId",res);          
          this.navCtrl.setRoot(TabsPage)       
        }else{
          loading.dismiss();  
          this.alertMess('Incorrect OTP.');
        }
      },
      (error:any)=>{
        console.log('Network connection error.',error);
      }
      )      
    }else{
      this.alertMess('Please enter otp!');
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
}
