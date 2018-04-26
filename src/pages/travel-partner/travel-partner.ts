import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TravelPartnerProvider } from '../../providers/travel-partner/travel-partner';
import { AppProvider } from "../../providers/app/app";

/**
 * Generated class for the TravelPartnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travel-partner',
  templateUrl: 'travel-partner.html',
})
export class TravelPartnerPage {

  url: string = "http://localhost:8000/api/travel";
  imgUrl: string;
  travels: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: AppProvider, public travelCtrl: TravelPartnerProvider) {
  }

  ionViewDidLoad() {
    this.loadTravel();
  }

  loadTravel() {
    this.travelCtrl.getTravel().subscribe(
      data => {
        this.travels = data.travels;
        this.imgUrl = this.app.imgUrl;
        console.log(data.travels);
      }
    );
  }
}


