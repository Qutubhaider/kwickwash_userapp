import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import {map} from 'rxjs/operators';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//const API:string="http://api.kwickwash.in/api/kwickService";

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable()

export class ServiceProvider {
  public items: any = [];
  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  //getService(){
    
    //return this.http.get(API);
  //}

  post(serviceName: string, data:any )
  {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options={headers : header, withCredintials: false};
   
    const url=environment.apiUrl +serviceName;

    return this.http.post(url,JSON.stringify(data),options)
  }

  private extractData(res:Response){
    let body=res;
    return body ||{};
  }

  

  get(serviceName: string){
    const url=environment.apiUrl +serviceName;
    return this.http.get(url,httpOptions).pipe(
      map(this.extractData));
  }

  getService(){
    return this.get('myserviceApp/'+sessionStorage.getItem("shopUserId"));
  }

  getProduct(serviceId:any){
    return this.get('myproduct?sid='+serviceId+'&uid='+sessionStorage.getItem("shopUserId"));
  }

  login(postData:any){
    return this.post('login',postData);
  }

  forgort(postData:any){
    return this.post('forgotpassword',postData);
  }

  getCity(){
    return this.get('city');
  }

  signUp(postData:any){
    return this.post('profile',postData);
  }

  appProfile(postData:any){
    return this.post('appprofile',postData);
  }

  kwickBook(postData:any){
    return this.post('kwickorderapp',postData);
  }

  getArea(postData:any){
    return this.get('area/GetAreaList?id=' + postData + '&val=1&vals=3');
  }

  getOrderList(postData:any){
    return this.get('OrderList/GetOrderHistory?orderid=0&status=0&cid='+postData+'');
  }

  getOrderSummary(postData:any){
    return this.get('Orderlist/GetData?orderId='+postData+'&status=1');
  }

  getOrderSummaryList(postData:any){
    return this.get('/placeorder/'+postData+'');
  }

  getOfferList(postData:any){
    return this.get('coupon/'+postData+'');
  }

  getOrderRequestList(postDate:any){
    return this.get('kwickOrder/GetReqOrderHistory?id=0&val=0&cid='+postDate+'');
  }
 
  getProfile(postData:any){
    console.log(postData);
    return this.get('profile/'+postData);
  }

  

}
