import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ChangepasswordPage } from '../changepassword/changepassword';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit{
  dataUser:any;
  userdetails:any;
  userdt:any;
  public api:ServiceProvider

  public postData={
    profileId:sessionStorage.getItem("userId"),
    name:'',
    emailId:'',
    mobile:'',
    dob:''
  }




  validateInput(){
    console.log(this.postData.name);
    console.log(this.postData.emailId);
    console.log(this.postData.mobile);
    console.log(this.postData.dob);
    let name=this.postData.name;
    let emailId=this.postData.emailId;
    let mobile=this.postData.mobile;
    let dob=this.postData.dob;
    return(this.postData.name && this.postData.emailId && this.postData.mobile && this.postData.dob &&
       name.length>0 && emailId.length>0 && mobile.length>0 && dob.length>0)
  }

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
      this.postData.name=this.dataUser[0].name;
      this.postData.emailId=this.dataUser[0].emailId;
      this.postData.mobile=this.dataUser[0].mobile;
      this.postData.dob=this.dataUser[0].dob;   

      loading.dismiss();  
    }); 
  }

  UpdateProfile(){
    console.log('In');
    if(this.validateInput()){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });  
    loading.present();  
    this.authService.appProfile(this.postData).subscribe((res:any)=>{
    if(res!="0"){
     
      alert("Successfully Update!");
      this.getProfile();
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

  ChangePassword(){
    this.navCtrl.push(ChangepasswordPage);
  }

}
