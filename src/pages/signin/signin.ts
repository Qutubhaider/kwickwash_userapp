import { Component, OnInit } from '@angular/core';
import { NavController,AlertController, LoadingController } from 'ionic-angular';
import { PasswordPage } from '../password/password';
import { SignupPage } from '../signup/signup';
import { ServiceProvider } from '../../providers/service/service';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { OtpPage } from '../otp/otp';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage implements OnInit{
  public postData={
    username:'',
    password:'',
    role:'custom'
  }
  userData: any = {};
  ngOnInit() {   
   
  
    console.log(sessionStorage.getItem("userId"));
    this.postData.username=sessionStorage.getItem("username");
    this.postData.password=sessionStorage.getItem("password");
    this.postData.role="custom";
    console.log(sessionStorage.getItem("username"));

    this.storage.get('username').then((val) => {
      console.log('username :', val);
      this.postData.username=val;
    });
    this.storage.get('password').then((val) => {
      console.log('password :', val);
      this.postData.password=val;
      //let password=this.postData.password.trim();
      //if(this.password.length>0)
      //{
      // this.googleSignIn();
      //}
    });

     
   
  }

  public api:ServiceProvider
  constructor(
    public navCtrl: NavController,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController,
    private storage: Storage

    ) {
     
     
    }
  
   validateInput(){
      let username=this.postData.username;
      let password=this.postData.password;  
      return(this.postData.username && this.postData.password && username.length>0 && password.length>0) 
  }

  validateMobile(){
    let username=this.postData.username; 
    return(this.postData.username && username.length>0) 
}

  loginAction(){    
    
    if(this.validateInput()){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });  
    loading.present();  
      this.authService.login(this.postData).subscribe((res:any)=>{
        if(res!="0"){
          loading.dismiss();  
          sessionStorage.setItem("userId",res);
          sessionStorage.setItem("username",this.postData.username);
          sessionStorage.setItem("password",this.postData.password);
          sessionStorage.setItem("role",this.postData.role);         
          //this.storageService.store(AuthConstants.AUTH,res.username);     
          console.log('Customer Id:'+res);
          //this.navCtrl.push(HomePage);  
          this.navCtrl.setRoot(TabsPage)       
        }else{
          loading.dismiss();  
          this.alertMess('Incorrect username and password.');
          console.log('Incorrect username and password.');
        }
      },
      (error:any)=>{
        console.log('Network connection error.',error);
      }
      )      
    }else{
      this.alertMess('Please enter mobile and password!');
      console.log('please enter mobile and password!');
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

 
  
  password(){
        this.navCtrl.push(PasswordPage);       
    }
  signup(){
        this.navCtrl.push(SignupPage);
    }
    addLocalStorage(){
      this.storage.set('username', this.postData.username);
      this.storage.set('password',this.postData.password);
      console.log(this.postData.username);
  }
  googleSignIn() {
    this.googleSignIn.apply({})
      .then(result => this.userData = result)
      .catch(err => this.userData = `Error ${JSON.stringify(err)}`);
  }

  loginWithOTP()
  {
    if(this.validateMobile()){
    this.navCtrl.push(OtpPage);  
    }
    else{
      this.alertMess('Please enter mobile !');
    }
  }

}
