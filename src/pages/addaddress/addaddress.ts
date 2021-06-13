import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-addaddress',
  templateUrl: 'addaddress.html'
})

export class AddaddressPage implements OnInit{
  dataUser:any;
  public api:ServiceProvider

  ngOnInit() {   
    this.getProfile();
   }
  constructor(
    public navCtrl: NavController,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController
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

}
