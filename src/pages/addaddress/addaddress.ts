import { Component, OnInit} from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
@Component({
  selector: 'page-addaddress',
  templateUrl: 'addaddress.html'
})

export class AddaddressPage implements OnInit{
  dataUser:any;
  public api:ServiceProvider
  
  public postData={
    profileId:sessionStorage.getItem("userId"),
    address:'',
    pincode:'',
    city:''
  }

  ngOnInit() {   
    this.getProfile();
   }

  constructor(
    public navCtrl: NavController, 
    private authService:ServiceProvider, 
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController) 
  {

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
      this.postData.address=this.dataUser[0].address;
      this.postData.city=this.dataUser[0].city;
      this.postData.pincode=this.dataUser[0].pincode;
      loading.dismiss();  
    }); 
  }

  validateInput(){
    let lsAddress=this.postData.address;
    let lsPincode=this.postData.pincode;
    let lsCity=this.postData.city;
    
    return(this.postData.address && this.postData.pincode && this.postData.city &&       
       lsAddress.length>0 && lsPincode.length>0 && lsCity.length>0)
  }

  SaveAddress()
  {
    console.log('welcome');
    console.log(this.postData.address);
      if(this.validateInput())
      {
        
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });  
      loading.present();  
      this.authService.appProfile(this.postData).subscribe((res:any)=>{
          if(res!="0"){      
            loading.dismiss();  
            alert("Successfully updated your address details.");
          }
          else
          {
              loading.dismiss();               
          }
       },(error:any)=>{
          console.log('Network connection error.',error);
        })      
      }
    }
  }
