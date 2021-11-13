import { NgModule, ErrorHandler,enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { AddaddressPage } from '../pages/addaddress/addaddress';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MyordersPage } from '../pages/myorders/myorders';
import { NotificationPage } from '../pages/notification/notification';
import { OffersPage } from '../pages/offers/offers';
import { OrderconfirmedPage } from '../pages/orderconfirmed/orderconfirmed';
import { OrderslipPage } from '../pages/orderslip/orderslip';
import { OtpPage } from '../pages/otp/otp';
import { PasswordPage } from '../pages/password/password';
import { PaymentPage } from '../pages/payment/payment';
import { ProfilePage } from '../pages/profile/profile';
import { RatePage } from '../pages/rate/rate';
import { SelectaddressPage } from '../pages/selectaddress/selectaddress';
import { SelectclothesPage } from '../pages/selectclothes/selectclothes';
import { SelectdatePage } from '../pages/selectdate/selectdate';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TncPage } from '../pages/tnc/tnc'; 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { TcoPage } from '../pages/tco/tco';
import { RefundpolicyPage } from '../pages/refundpolicy/refundpolicy';
import { ServiceProvider } from '../providers/service/service';
import { OrderrequestPage } from '../pages/orderrequest/orderrequest';
import { WelcomePage } from '../pages/welcome/welcome';
import { HellopagePage } from '../pages/hellopage/hellopage';
import { IonicStorageModule } from '@ionic/storage';
import { InvoicePage } from '../pages/invoice/invoice';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AccountPage,
    AddaddressPage,
    ContactPage,
    HomePage,
    MyordersPage,
    NotificationPage,
    OffersPage,
    OrderconfirmedPage,
    OrderslipPage,
    OtpPage,
    PasswordPage,
    PaymentPage,
    ProfilePage,
    RatePage,
    SelectaddressPage,
    SelectclothesPage,
    SelectdatePage,
    SigninPage,
    SignupPage,
    TabsPage,
    TncPage,
    PrivacypolicyPage,
    TcoPage,
    RefundpolicyPage,
    OrderrequestPage,
    WelcomePage,
    HellopagePage,
    InvoicePage,
    ChangepasswordPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AccountPage,
    AddaddressPage,
    ContactPage,
    HomePage,
    MyordersPage,
    NotificationPage,
    OffersPage,
    OrderconfirmedPage,
    OrderslipPage,
    OtpPage,
    PasswordPage,
    PaymentPage,
    ProfilePage,
    RatePage,
    SelectaddressPage,
    SelectclothesPage,
    SelectdatePage,
    SigninPage,
    SignupPage,
    TabsPage,
    TncPage,
    PrivacypolicyPage,
    TcoPage,
    RefundpolicyPage,
    OrderrequestPage,
    WelcomePage,
    HellopagePage,
    InvoicePage,
    ChangepasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
enableProdMode();