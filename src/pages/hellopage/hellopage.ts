import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-hellopage',
  templateUrl: 'hellopage.html',
})
export class HellopagePage implements OnInit{
  dataCity:any;
  dataArea:any;
  constructor(
    public navCtrl: NavController,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController
  ) {
  }

  ngOnInit() {   
    console.log(sessionStorage.getItem("shopUserId"))
    this.BindCity();
  
    //this.getDataService();
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

  goDashboard(){
    this.navCtrl.setRoot(TabsPage)
  }
}
