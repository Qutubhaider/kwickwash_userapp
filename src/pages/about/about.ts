import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  ourTeam = [
    {
      image: "assets/imgs/Anup-Sharma.jpg",
      name: "Anup Sharma",
      desgination: "Founder",
    },
    {
      image: "assets/imgs/Mary-Artee-Sharma.jpeg",
      name: "Mary Artee Sharma",
      desgination: "Co-Founder",
    },
    {
      image: "assets/imgs/Niraj-Jain.jpg",
      name: "Niraj Jain",
      desgination: "Legal & Financial Consultant",
    },
    
    {
      image: "assets/imgs/Santosh-Shukla.jpg",
      name: "Santosh Shukla",
      desgination: "Mentor",
    },
    {
      image: "assets/imgs/Deepak.jpg",
      name: "Deepak",
      desgination: "Mentor",
    },
    {
      image: "assets/imgs/niteen.jpeg",
      name: "Niteen Phansalkar",
      desgination: "Mentor",
    },
    {
      image: "assets/imgs/Monochrome-Lab.png",
      name: "Monochrome Lab",
      desgination: "Tech Team",
    }
  ];
}
