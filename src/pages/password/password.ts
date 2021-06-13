import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@Component({
  selector: 'page-password',
  templateUrl: 'password.html'
})
export class PasswordPage {

  public postData={
    email:'',
    role:'2'
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
    let email=this.postData.email.trim();
    return(this.postData.email &&  email.length>0) 
}


  Forgot(){
    if(this.validateInput()){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });  
    loading.present();  
      this.authService.forgort(this.postData).subscribe((res:any)=>{
        if(res!="0"){
          loading.dismiss();     
          this.alertMess('Check Your Email Inbox.');     
        }else{
          loading.dismiss();  
          this.alertMess('Incorrect email-id.');
        }
      },
      (error:any)=>{
        console.log('Network connection error.',error);
      }
      )      
    }else{
      this.alertMess('Please enter email-id.');
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
