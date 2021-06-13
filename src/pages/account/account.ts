import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { MyordersPage } from '../myorders/myorders';
import { AddaddressPage } from '../addaddress/addaddress';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TncPage } from '../tnc/tnc';
import { SigninPage } from '../signin/signin';
import { PrivacypolicyPage } from '../privacypolicy/privacypolicy';
import { TcoPage } from '../tco/tco';
import { RefundpolicyPage } from '../refundpolicy/refundpolicy';
import { ServiceProvider } from '../../providers/service/service';
import { OrderrequestPage } from '../orderrequest/orderrequest';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage implements OnInit{
  dataUser:any;

  public api:ServiceProvider

  ngOnInit() {   
    this.getProfile();
   }

  constructor(
    public navCtrl: NavController,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController,
    private storage: Storage
    ) {
  }
  
  getProfile(){
    console.log('welcome');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });  
    loading.present();  

    //End Loader    
    console.log(sessionStorage.getItem("userId"));
    this.authService.getProfile(sessionStorage.getItem("userId"))
    .subscribe(res=>{
      this.dataUser=res;
      loading.dismiss();  
    }); 
  }

   profile(){
   this.navCtrl.push(ProfilePage);
  }
   myorders(){
   this.navCtrl.push(MyordersPage);
  }
   addaddress(){
   this.navCtrl.push(AddaddressPage);
  }
  myrequest(){
    this.navCtrl.push(OrderrequestPage);
  }
   about(){
   this.navCtrl.push(AboutPage);
  }
   contact(){
   this.navCtrl.push(ContactPage);
  }
  tnc(){
   this.navCtrl.push(TncPage);
  }
  pry(){
  this.navCtrl.push(PrivacypolicyPage);
  }
  toc(){
    this.navCtrl.push(TcoPage);
  }
  repy(){
    this.navCtrl.push(RefundpolicyPage);
  }
  
  signout(){   
    //sessionStorage.setItem("userId",null);
    
    this.storage.remove('username');
    this.storage.remove('password');
    this.navCtrl.push(SigninPage);
  }

}
